import React from "react";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/Routes";

import TopBar from "../../components/TopBar";
import MenuLeft from "../../components/MenuLeft";
import "./IndexLayout.scss";

export default function IndexLayout(props) {
  const { user, setReloadApp } = props;

  return (
    <Router>
      <Grid className="logged-layout">
        <Grid.Row>
          <Grid.Column width={3}>
            <MenuLeft user={user} />
          </Grid.Column>

          <Grid.Column className="content" width={13}>
            <TopBar user={user} />
            <Routes user={user} setReloadApp={setReloadApp} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Router>
  );
}
