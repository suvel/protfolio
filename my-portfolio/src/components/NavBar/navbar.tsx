import React, { FunctionComponent } from "react";
import { MenuBar } from "../";
import "./navbar.css";
const NavBar: FunctionComponent = () => {
  return (
    <React.Fragment>
      <MenuBar />
      <div className="nav-bar">
        <ul>
          <li>
            <a href={"/"}>about Me</a>
          </li>
          <li>
            <a href={"#/favnpm"}>fav npm</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
