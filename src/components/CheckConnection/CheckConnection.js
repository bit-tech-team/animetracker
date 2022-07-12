import React from "react";
import { Detector } from "react-detect-offline";

import NoConnection from "../../assets/img/no-connection.png";
import "./CheckConnection.scss";

export default function CheckConnection(props) {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div className="container-connection">
              <div className="container-connection__content">
                <img src={NoConnection} alt="no connection img" />
                <h1>No Connection</h1>
                <h4>
                  Please check your internet connection, the app will not work
                  properly without internet access
                </h4>
              </div>
            </div>
          )
        }
      />
    </>
  );
}
