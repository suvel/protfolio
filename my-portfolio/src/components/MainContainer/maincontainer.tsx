import React, { FunctionComponent } from "react";
import "./maincontainer.css";

const background = require("../../assets/images/man-bg.svg");

const MainContainer: FunctionComponent = (props) => {
  return (
    <div
      className={"main-container"}
      style={{ backgroundImage: `url(${background})` }}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
