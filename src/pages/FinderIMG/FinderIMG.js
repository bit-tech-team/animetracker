import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { trackPromise } from "react-promise-tracker";

import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import ReactPlayer from "react-player";

import "./FinderIMG.scss";
import { generarId, validFile } from "../../utils/helpers";
import AnimeDetail from "../../components/AnimeDetail/AnimeDetail";
import BasicModal from "../../components/BasicModal/BasicModal";
import CheckConnection from "../../components/CheckConnection/CheckConnection";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function FinderIMG() {
  const { register, handleSubmit } = useForm();
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const [errorPromise, setErrorPromise] = useState("");
  const [item, setItem] = useState({});
  const [t] = useTranslation("common");

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const [anilist, setAnilist] = useState([]);

  if (data === undefined) {
    setData([]);
  }

  if (anilist === undefined) {
    setAnilist([]);
  }

  /**
   * Function that fetch de data in de form and send
   * the request to the api
   * @param {*} data 
   * @returns Promise
   */
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

  /**
   * Function that fetch the data from the
   * anilist api
   * @param {*} id anime id
   */
  const anilistData = async (id) => {
    let query = `
      query ($id: Int) {
        Media (id: $id, type: ANIME) { 
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          externalLinks {
            url
            site
          }
          startDate {
            day
            month
            year
          }
          endDate {
            day
            month
            year
          }
          episodes
          duration
          genres
          source
        }
      }
    `;

    // Define our query variables and values that will be used in the query request
    let variables = {
      id: id,
    };

    // Define the config we'll need for our Api request
    let url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };

    function handleError(error) {
      alert("Error, check console");
      console.error(error);
    }

    // Make the HTTP Api request
    const response = await fetch(url, options);

    return response
      .json()
      .then((resp) => {
        setAnilist([resp.data]);
      })
      .catch(handleError);
  };

  /**
   * Function that display the modal with the
   * information of the selected anime
   */
  const handlerModal = () => {
    setTitleModal("");
    setContentModal(<AnimeDetail anime={item} anilist={anilist} />);
    setShowModal(true);
  };

  /**
   * Function that send the data
   * @param {*} data 
   */
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
    <CheckConnection>
      <div className="container-search-url">
        <div className="header-search-url">
          <h1>{t("SearchIMG.title", { framework: "React" })}</h1>
        </div>
        <div className="result-found">
          {Object.keys(item).length !== 0 && (
            <div className="content-video">
              <h1>{item.anilist.title.native}</h1>
              <ReactPlayer
                playing
                loop
                volume={0.2}
                muted
                controls
                url={item.video}
              />
              <button
                className="show-detail"
                onClick={() => handlerModal(item)}
              >
                {t("Buttons.show_detail", { framework: "React" })}
              </button>
            </div>
          )}
        </div>
        <div className="search-section">
          <div className="search-section__title">
            <h3>
              {t("SearchIMG.search_button_title", { framework: "React" })}
            </h3>
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
                      {t("Buttons.send", { framework: "React" })}
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
                <li
                  key={generarId()}
                  onClick={() => {
                    anilistData(item.anilist.id);
                    setItem(item);
                  }}
                >
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
      <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
        {contentModal}
      </BasicModal>
    </CheckConnection>
  );
}
