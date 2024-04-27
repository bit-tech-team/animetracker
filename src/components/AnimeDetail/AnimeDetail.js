import React from "react";
import { generarId } from "../../utils/helpers";

import "./AnimeDetail.scss";

export default function AnimeDetail({ anime, anilist }) {

  /**
   * Function that format the date
   * @param {*} date receive the date
   * @returns string
   */
  const formatDate = (date) => {
    let a = [];
    let dateToString;

    Object.entries(date).forEach(([key, value]) => {
      a.push(value);
    });

    dateToString = a.toString().replace(",", "-").replace(",", "-");
    return dateToString;
  };

  return (
    <div className="container-anime">
      <div className="anime-title">
        <h1>{anime.anilist.title.native}</h1>
        <h3>{anime.anilist.title.romaji}</h3>
      </div>
      <div className="anime-img">
        {anilist.map((x) => (
          <img src={x.Media.coverImage.large} alt="anime img" />
        ))}
      </div>
      <div className="anime-content">
        <hr className="line" />
        <div className="anime-content__general-info">
          {anilist.map((x) => (
            <>
              <p>
                {x.Media.episodes} episodes {x.Media.duration} - minutes
              </p>
              <p>
                Airing from {formatDate(x.Media.startDate)} to{" "}
                {formatDate(x.Media.endDate)}
              </p>
            </>
          ))}
        </div>
        <hr className="line" />
        <div className="anime-content__genres">
          <div className="anime-content__genres__left">
            <p>Genres</p>
          </div>
          <div className="anime-content__genres__right">
            <ul>
              {anilist.map((x) =>
                x.Media.genres.map((y) => <li key={generarId()}>{y}</li>)
              )}
            </ul>
          </div>
        </div>
        <hr className="line" />

        <div className="anime-content__links">
          <div className="anime-content__links__left">
            <p>External Links</p>
          </div>
          <div className="anime-content__links__right">
            <ul>
              {anilist.map((x) =>
                x.Media.externalLinks.map((y) => (
                  <li key={generarId()}>
                    <a href={y.url} rel="noopener noreferrer" target="_blank">
                      {y.site}
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <hr className="line" />
      </div>
    </div>
  );
}
