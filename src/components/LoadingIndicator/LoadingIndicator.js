import React from "react";

import { usePromiseTracker } from "react-promise-tracker";
import { ThreeCircles } from "react-loader-spinner";

import "./LoadingIndicator.scss";

export default function LoadingIndicator(props) {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div
        className="container-loader"
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeCircles
          color="red"
          outerCircleColor="#C93814"
          middleCircleColor="#C93814"
          innerCircleColor="#C93814"
        />
      </div>
    )
  );
}
