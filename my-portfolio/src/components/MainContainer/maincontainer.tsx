import React, { FunctionComponent } from "react";
import "./maincontainer.css";

const MainContainer: FunctionComponent = (props) => {
  return (
    <div
      className={"main-container"}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
