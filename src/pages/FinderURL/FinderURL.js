import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";

import ReactPlayer from "react-player";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

import { generarId, validURL } from "../../utils/helpers";
import "./FinderURL.scss";
import BasicModal from "../../components/BasicModal/BasicModal";
import AnimeDetail from "../../components/AnimeDetail/AnimeDetail";
import CheckConnection from "../../components/CheckConnection/CheckConnection";

export default function FinderURL() {
  const [inputVal, setInputVal] = useState("");

  const [data, setData] = useState([]);
  const [errorPromise, setErrorPromise] = useState("");
  const [item, setItem] = useState({});

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
   * Function that fecth the data from the api and return
   * the data
   * @param {*} url url to request
   * @returns Promise
   */
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
        console.log(resp);
      })
      .catch(handleError);
  };

  /**
   * Function that send the request to the api
   * and return the data
   * @param {*} e event
   */
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

  /**
   * Function that display the modal with the
   * information of the selected anime
   */
  const handlerModal = () => {
    setTitleModal("");
    setContentModal(<AnimeDetail anime={item} anilist={anilist} />);
    setShowModal(true);
  };

  return (
    <CheckConnection>
      <div className="container-search-url">
        <div className="header-search-url">
          <h1>Search for the anime using the url of an anime image scene</h1>
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
                Show details
              </button>
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
