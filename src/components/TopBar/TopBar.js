import React from "react";
import "./TopBar.scss";
import { Icon, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import LogoBTT from "../../assets/img/bttl.png";

function TopBar(props) {
  const { history } = props;

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="top-bar">
      <div className="top-bar__left">
        <Icon name="angle left" onClick={goBack} />
      </div>

      <div className="top-bar__right">
        <a
          rel="noopener noreferrer"
          href="https://github.com/Bit-Tech-Team"
          target="_blank"
        >
          <Image src={LogoBTT} />
        </a>
      </div>
    </div>
  );
}

export default withRouter(TopBar);
