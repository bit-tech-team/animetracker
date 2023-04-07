import React from "react";
import "./Home.scss";
import { Icon } from "semantic-ui-react";
import Carousel from "../../components/Carousel/Carousel";
import { openUrl } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t] = useTranslation("common");

  return (
    <div className="container-home">
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="content">
        <p>{t("Home.description", { framework: "React" })}</p>
      </div>
      {/* <div className="content-side">
        <h3>Powered thanks to:</h3>
        <ul>
          <li>
            trace.moe-api{" "}
            <span>
              <Icon
                name="github"
                onClick={() =>
                  openUrl("https://github.com/soruly/trace.moe-api")
                }
              />
            </span>
          </li>
          <li>
            thanks to <b>soruly</b> for doing the api{" "}
            <span>
              <Icon
                name="github"
                onClick={() => openUrl("https://github.com/soruly")}
              />
            </span>
          </li>
          <li>
            based on
            <a
              rel="noopener noreferrer"
              href="https://trace.moe/"
              target="_blank"
            >
              <b> trace.mo</b>
            </a>{" "}
            <span>
              <Icon
                name="github"
                onClick={() => openUrl("https://github.com/soruly/trace.moe")}
              />
            </span>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
