import React from "react";
import COE from "../../assets/img/classroom-of-the-elite.jpg";
import BNH from "../../assets/img/boku-no-hero.png";
import ASS from "../../assets/img/arifureta.jpg";

import "./Carousel.scss";

export default function Carousel() {
  return (
    <>
      <div>
        <h1>Easy way to find your favorite anime</h1>
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content">
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <img src={COE} alt="cassroom of the elite img" />
            </div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <img src={BNH} alt="cassroom of the elite img" />
            </div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <img src={ASS} alt="cassroom of the elite img" />
            </div>
          </div>
        </figure>
      </div>
    </>
  );
}
