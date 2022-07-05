import React from "react";
import { Switch, Route, Router } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Help from "../pages/Help";
import Contribution from "../pages/Contribution";
import FinderURL from "../pages/FinderURL/FinderURL";
import FinderIMG from "../pages/FinderIMG/FinderIMG";
import Terms from "../pages/Terms/Terms";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/help" exact>
        <Help />
      </Route>
      <Route path="/contribution" exact>
        <Contribution />
      </Route>
      <Route path="/finder-url" exact>
        <FinderURL />
      </Route>
      <Route path="/finder-image" exact>
        <FinderIMG />
      </Route>
      <Route path="/terms" exact>
        <Terms />
      </Route>
      {/* <Route path="/notes" exact>
        <Notas />
      </Route> */}
    </Switch>
  );
}
