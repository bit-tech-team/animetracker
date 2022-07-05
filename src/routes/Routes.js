import React from "react";
import { Route, Switch } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Help from "../pages/Help";
import Contribution from "../pages/Contribution";
import FinderURL from "../pages/FinderURL";
import FinderIMG from "../pages/FinderIMG";
import Terms from "../pages/Terms";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/contribution">
        <Contribution />
      </Route>
      <Route path="/finder-url">
        <FinderURL />
      </Route>
      <Route path="/finder-image">
        <FinderIMG />
      </Route>
      <Route path="/terms">
        <Terms />
      </Route>
    </Switch>
  );
}
