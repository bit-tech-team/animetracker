import React from "react";
import "./Terms.scss";
import { Icon } from "semantic-ui-react";
import { openUrl } from "../../utils/helpers";

export default function Terms() {
  return (
    <div className="container-terms">
      <div className="header-terms">
        <h1>Terms and Agreements</h1>
      </div>
      <div className="terms-app-section">
        <div className="terms-app-section__title">
          <h3>Terms and Agreements to the APP</h3>
        </div>
        <div className="terms-app-section__content">
          <p>
            By using this APP, you implicity agree and aprove the terms and
            conditions of the API and the following:
          </p>
          <ul>
            <li>
              Using this APP for commercial purpose (such as reselling) is
              forbidden.
            </li>
            <li>
              By using this APP you agree to abide by the terms and conditions
              described in this section.
            </li>
            <li>
              Anime tracker does not save any of your images, they are processed
              by the API and deleted after a few seconds.
            </li>
            <li>
              I am not responsible for problems that anime tracker may cause on
              your computer.
            </li>
            <li>
              Anime Tracker does not require any permissions to run, nor does it
              need to be run in administrator mode.
            </li>
            <li>Any inappropriate use of this app is totally forbidden.</li>
            <li>
              Bit Teach Team retains the rights to explain and make changes to
              above terms.
            </li>
            <li>
              There is no guarantee that the APP will stay like this forever,
              any changes or improvements will be updated in the Anime Tracker
              repository.{" "}
              <span>
                <Icon
                  name="github"
                  onClick={() =>
                    openUrl("https://github.com/Bit-Tech-Team/Anime-Tracker")
                  }
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="terms-api-section">
        <div className="terms-api-section__title">
          <h3>Terms and Agreements to the API</h3>
        </div>
        <div className="terms-api-section__content">
          <p>
            By using the trace.moe API, you implicitly agree and approve the
            below terms:
          </p>
          <ul>
            <li>
              trace.moe is not responsible for any of your losses due to service
              interruptions or due to inaccurate / inappropriate search results.
            </li>
            <li>
              trace.moe does not keep any of your search images. All temporary
              files (if any) are deleted immediately after search. But the image
              you submit would be processed by software used by trace.moe.
            </li>
            <li>IP addresses would be logged for rate limiting.</li>
            <li>
              Users abusing the API (including but not limited to DoS attacks,
              sending malicious media, data crawling, hacking) is strictly
              forbidden and would be banned.
            </li>
            <li>
              Using this API for commercial purpose (such as reselling) is
              forbidden, unless explicitly approved.
            </li>
            <li>
              This API is not a commercial paid-service. Extra quota and limits
              are optional rewards for sponsors. There is no service-level
              agreement or refund policies.
            </li>
            <li>
              There is no guarantee that the API remains unchanged forever.
              Changes to the API would be announced via{" "}
              <span>
                <Icon name="patreon" />
                <a
                  rel="noopener noreferrer"
                  href="https://www.patreon.com/soruly"
                  target="_blank"
                >
                  <b>Patreon</b>
                </a>
              </span>{" "}
              and{" "}
              <span>
                <Icon name="discord" />
                <a
                  rel="noopener noreferrer"
                  href="https://discord.gg/K9jn6Kj"
                  target="_blank"
                >
                  <b>Discord</b>
                </a>
              </span>{" "}
              .
            </li>
            <li>
              trace.moe retains the rights to explain and make changes to above
              terms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
