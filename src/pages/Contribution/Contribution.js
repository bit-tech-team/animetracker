import React from "react";
import { Icon } from "semantic-ui-react";
import "./Contribution.scss";
import { openUrl } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

export default function Contribution() {
  const [t] = useTranslation("common");
  return (
    <div className="container-contribution">
      <div className="header-contribution">
        <h1>{t("Contribution.title", { framework: "React" })}</h1>
      </div>

      {/* ------------------- APP CREATOR SECTION ------------------- */}
      <div className="side-left-top">
        <div className="side-left-top__title">
          <h3>{t("Contribution.contrib_title_one", { framework: "React" })}</h3>
        </div>
        <div className="side-left-top__content">
          <p>{t("Contribution.contrib_des_one", { framework: "React" })}</p>
          <ul className="highlight">
            <li>
              <span>
                <Icon
                  name="github"
                  onClick={() =>
                    openUrl("https://github.com/Bit-Tech-Team/Anime-Tracker")
                  }
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Bit-Tech-Team/Anime-Tracker"
                target="_blank"
              >
                APP {t("Common.repo", { framework: "React" })}
              </a>
            </li>
            <li>
              <span>
                <Icon
                  name="github"
                  onClick={() =>
                    openUrl(
                      "https://github.com/Bit-Tech-Team/Anime-Tracker/issues/new"
                    )
                  }
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Bit-Tech-Team/Anime-Tracker/issues/new"
                target="_blank"
              >
                {t("Common.open_issue", { framework: "React" })}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="side-right-top">
        <div className="side-right-top__title">
          <h3>{t("Contribution.support_title_one", { framework: "React" })}</h3>
        </div>
        <div className="side-right-top__content">
          <p>{t("Contribution.support_des_one", { framework: "React" })}</p>
          <ul className="highlight">
            <li>
              <span>
                <Icon
                  name="heart"
                  onClick={() => openUrl("https://github.com/sponsors/shakarr")}
                />
              </span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/sponsors/shakarr"
                target="_blank"
              >
                GitHub Sponsor
              </a>{" "}
            </li>

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
    </div>
  );
}
