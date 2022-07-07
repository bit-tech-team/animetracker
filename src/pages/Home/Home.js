import React from "react";
import "./Home.scss";
import { Icon } from "semantic-ui-react";
import Carousel from "../../components/Carousel/Carousel";
import { openUrl } from "../../utils/helpers";

export default function Home() {
  return (
    <div className="container-home">
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="content">
        <p>
          Are you looking for an anime that you saw a long time ago in a video
          where a scene came out? or maybe you saw it on a tik-tok but couldn't
          find the name? Well, thanks to Anime Tracker you can find it by
          entering an image scene. Not only that, you will also be able to know what
          chapter it is about and much more useful information.
        </p>
      </div>
      <div className="content-side">
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
      </div>
    </div>
  );
}
