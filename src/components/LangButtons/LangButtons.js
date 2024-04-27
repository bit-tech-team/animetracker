import React from "react";
import { useTranslation } from "react-i18next";

import "./LangButtons.scss";

export default function LangButtons() {
  const [t, i18n] = useTranslation("common");
  
  return (
    <div className="lang-container">
      <div className="lang-container__wrapper">
        <button onClick={() => i18n.changeLanguage("es")}>es</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
      </div>
    </div>
  );
}
