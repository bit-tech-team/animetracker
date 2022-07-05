import React from "react";
import { Icon } from "semantic-ui-react";
import "./Contribution.scss";
import { openUrl } from "../../utils/helpers";

export default function Contribution() {
  return (
    <div className="container-contribution">
      <div className="header-contribution">
        <h1>Feel free to contribute to the creators or support them</h1>
      </div>

      {/* ------------------- APP CREATOR SECTION ------------------- */}
      <div className="side-left-top">
        <div className="side-left-top__title">
          <h3>Contribute with the APP creator (shakar)</h3>
        </div>
        <div className="side-left-top__content">
          <p>
            If you want to contribute with the APP or the API here are some
            links
          </p>
          <ul className="highlight">
            <li>
              <span>
                <Icon
                  name="github"
                  onClick={() => openUrl("https://github.com/Bit-Tech-Team")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Bit-Tech-Team"
                target="_blank"
              >
                APP repositorie
              </a>
            </li>
            <li>
              <span>
                <Icon
                  name="github"
                  onClick={() => openUrl("https://github.com/Bit-Tech-Team")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Bit-Tech-Team"
                target="_blank"
              >
                Open an issue for new features or anything else
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="side-right-top">
        <div className="side-right-top__title">
          <h3>Contribute with the API creator (soruly)</h3>
        </div>
        <div className="side-right-top__content">
          <p>
            If you want to contribute with the APP or the API here are some
            links
          </p>
          <ul className="highlight">
            <li>
              <span>
                <Icon
                  name="github"
                  onClick={() =>
                    openUrl("https://github.com/soruly/trace.moe-api")
                  }
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/soruly/trace.moe-api"
                target="_blank"
              >
                API repositorie
              </a>
            </li>

            <li>
              <span>
                <Icon
                  name="github"
                  onClick={() =>
                    openUrl(
                      "https://github.com/soruly/trace.moe-api/issues/new"
                    )
                  }
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/soruly/trace.moe-api/issues/new"
                target="_blank"
              >
                Open an issue for anything else
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="side-left-bottom">
        <div className="side-left-bottom__title">
          <h3>Support the APP creator (shakar)</h3>
        </div>
        <div className="side-left-bottom__content">
          <p>
            Did you like the app? Do you want to support the people who have
            made it possible? well then you have some links for it, whether you
            want to support the creator of the APP or the creator of the API
          </p>
          <ul className="highlight">
            <li>
              <span>
                <Icon
                  name="coffee"
                  onClick={() => openUrl("https://ko-fi.com/shakar")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://ko-fi.com/shakar"
                target="_blank"
              >
                Ko-fi
              </a>{" "}
            </li>

            <li>
              <span>
                <Icon
                  name="paypal"
                  onClick={() => openUrl("https://www.paypal.me/shakar12/")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://www.paypal.me/shakar12/"
                target="_blank"
              >
                PayPal
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="side-right-bottom">
        <div className="side-right-bottom__title">
          <h3>Support the API creator (soruly)</h3>
        </div>
        <div className="side-right-bottom__content">
          <p>
            Did you like the app? Do you want to support the people who have
            made it possible? well then you have some links for it, whether you
            want to support the creator of the APP or the creator of the API
          </p>
          <ul className="highlight">
            <li>
              <span>
                <Icon
                  name="heart"
                  onClick={() => openUrl("https://github.com/sponsors/soruly")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/sponsors/soruly"
                target="_blank"
              >
                GitHub Sponsor
              </a>{" "}
            </li>

            <li>
              <span>
                <Icon
                  name="paypal"
                  onClick={() => openUrl("https://www.paypal.me/soruly/")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://www.paypal.me/soruly/"
                target="_blank"
              >
                PayPal
              </a>{" "}
            </li>
            <li>
              <span>
                <Icon
                  name="patreon"
                  onClick={() => openUrl("https://www.patreon.com/soruly")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="patreon.com/soruly"
                target="_blank"
              >
                Patreon
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
