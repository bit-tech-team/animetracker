import React from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";

import DemoHelp from "../../assets/video/help-demo.mp4";
import "./Help.scss";

export default function Help() {
  const [t] = useTranslation("common");

  return (
    <div className="container-help">
      <div className="header-help">
        <h1>{t("Help.title", { framework: "React" })}</h1>
      </div>
      <div className="content-help">
        <p>{t("Help.description_part_one", { framework: "React" })}</p>
        <p>{t("Help.description_part_two", { framework: "React" })}</p>

        <div className="demo-vid-container">
          <ReactPlayer controls volume={0.4} url={DemoHelp} />
        </div>
      </div>
    </div>
  );
}
