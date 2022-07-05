import React from "react";
import ReactPlayer from "react-player";

import DemoHelp from "../../assets/video/help-demo.mp4";
import "./Help.scss";

export default function Help() {
  return (
    <div className="container-help">
      <div className="header-help">
        <h1>How does it work</h1>
      </div>
      <div className="content-help">
        <p>
          Go to the section of the menu to <b>search by url</b>, click on the
          magnifying glass and paste your url{" "}
          <b>(only image formats are accepted: png, jpeg, jpg)</b> and then
          press enter or go to the <b>search by image</b> menu section, click on
          the button and a window will open for you to select a file and then
          press the send button.
        </p>
        <p>
          {" "}
          You will see that it starts to load and then the content obtained will
          be listed, and you will only have to select the one you want to see
          its information. You have both case in the following example video:
        </p>

        <div className="demo-vid-container">
          <ReactPlayer controls volume={0.4} url={DemoHelp} />
        </div>
      </div>
    </div>
  );
}
