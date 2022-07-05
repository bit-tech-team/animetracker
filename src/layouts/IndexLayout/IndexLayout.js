import React from "react";
import { Grid } from "semantic-ui-react";
import { HashRouter as RouterApp } from "react-router-dom";
import Routes from "../../routes/Routes";

import TopBar from "../../components/TopBar";
import MenuLeft from "../../components/MenuLeft";
import "./IndexLayout.scss";

export default function IndexLayout() {
  return (
    <RouterApp>
      <Grid className="logged-layout">
        <Grid.Row>
          <Grid.Column width={3}>
            <MenuLeft />
          </Grid.Column>

          <Grid.Column className="content" width={13}>
            <TopBar />
            <Routes />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </RouterApp>
  );
}
