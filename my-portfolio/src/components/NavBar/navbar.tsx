import React, { FunctionComponent } from "react";
import { MenuBar } from "../";
import "./navbar.css";
const NavBar: FunctionComponent = () => {
  return (
    <React.Fragment>
      <MenuBar />
      <div className="nav-bar">
        <ul>
          <li>about Me</li>
          <li>fav npm</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
