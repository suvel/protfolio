import React, { FunctionComponent } from "react";
import { MenuBar } from "../";
import "./navbar.css";
const NavBar: FunctionComponent = () => {
  return (
    <React.Fragment>
      <MenuBar />
      <div className="nav-bar">hi</div>
    </React.Fragment>
  );
};

export default NavBar;
