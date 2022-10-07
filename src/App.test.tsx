import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("renders p", () => {
  mount(<App />);
  cy.get("p").contains("Are you looking");
});
