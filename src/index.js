import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import i18next from "i18next";

import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";
import "./index.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
