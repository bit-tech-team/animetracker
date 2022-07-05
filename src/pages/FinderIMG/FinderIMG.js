import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { trackPromise } from "react-promise-tracker";

import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import ReactPlayer from "react-player";

import "./FinderIMG.scss";
import { generarId, validFile } from "../../utils/helpers";

export default function FinderIMG() {
  const { register, handleSubmit } = useForm();
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const [errorPromise, setErrorPromise] = useState("");
  const [item, setItem] = useState({});

  if (data === undefined) {
    setData([]);
  }

  const fetchForm = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    const res = await fetch("https://api.trace.moe/search?anilistInfo", {
      method: "POST",
      body: formData,
    });

    return res
      .json()
      .then((result) => setData(result.result))
      .catch((error) => setErrorPromise(error));
  };

  const onSubmit = async (data) => {
    setData([]);
    setItem({});

    if (!validFile.test(inputVal)) {
      toast.error("Allowed formats: png, jpg, jpeg");
    } else {
      trackPromise(fetchForm(data));
    }
  };

  return (
    <>
      <div className="container-search-url">
        <div className="header-search-url">
          <h1>Search for the anime using the image of an anime scene</h1>
        </div>
        <div className="result-found">
          {Object.keys(item).length !== 0 && (
            <div className="content-video">
              <h1>{item.anilist.title.native}</h1>
              <p>
                <b>Episode:</b> {item.episode}
              </p>
              <p>
                <b>Adult:</b> {item.anilist.isAdult ? "yes" : "no"}
              </p>
              <ReactPlayer playing loop volume={0.4} url={item.video} />
            </div>
          )}
        </div>
        <div className="search-section">
          <div className="search-section__title">
            <h3>Click on the buttom to select an image</h3>
          </div>
          <div className="search-section__content">
            <div className="container-search">
              <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="file-upload">
                    <input
                      type="file"
                      {...register("file")}
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                    />
                    <Icon name="upload" />
                  </div>
                  <div className="send-button">
                    <button className="send" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
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
