import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";

import ReactPlayer from "react-player";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

import { generarId, validURL } from "../../utils/helpers";
import "./FinderURL.scss";

export default function FinderURL() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const [errorPromise, setErrorPromise] = useState("");
  const [item, setItem] = useState({});

  if (data === undefined) {
    setData([]);
  }

  const fetchData = async (url) => {
    const response = await fetch(
      `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(url)}`
    );
    return response
      .json()
      .then((result) => {
        setData(result.result);
        setErrorPromise("Allowed formats");
      })
      .catch((error) => {
        setErrorPromise(error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData([]);
    setItem({});

    if (!validURL.test(inputVal)) {
      toast.error(
        "Invalid url or wrong extension, allowed extensions: png, jpg, jpeg. Example URL: https://domainurl/imagetotest.png"
      );
    } else {
      trackPromise(fetchData(inputVal));
    }
  };

  return (
    <>
      <div className="container-search-url">
        <div className="header-search-url">
          <h1>Search for the anime using the url of an anime image scene</h1>
        </div>
        <div className="result-found">
          {Object.keys(item).length !== 0 && (
            <div className="content-video">
              <h1>{item.anilist.title.native}</h1>
              <ReactPlayer playing loop volume={0.4} muted url={item.video} />
              <button className="show-detail" onClick={() => alert("work")}>Show details</button>
            </div>
          )}
        </div>
        <div className="search-section">
          <div className="search-section__title">
            <h3>Click on the magnifying glass to search</h3>
          </div>
          <div className="search-section__content">
            <div className="container-search">
              <form className="search-box" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="https://url/image.png"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
                <button type="reset"></button>
              </form>
            </div>
          </div>
        </div>
        <div className="result-list">
          <LoadingIndicator />
          <div className="container-data">
            <ul className="list-items">
              {data.map((item) => (
                <li key={generarId()} onClick={() => setItem(item)}>
                  <span>
                    <Icon name="caret right" />
                  </span>
                  {item.anilist.title.romaji}
                  <br />
                  <span>
                    {" "}
                    Similarity <b>{(item.similarity * 100).toFixed(2)}%</b>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
