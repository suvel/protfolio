import React, { FunctionComponent, useState } from "react";
import { MenuBar } from "../";
import classnames from "classnames";
import "./navbar.css";
const NavBar: FunctionComponent = () => {
  const [navSelected, setNavSelected] = useState(false);

  const navBarStyle = classnames({
    "nav-bar": navSelected,
    "nav-bar-close": !navSelected,
  });

  const handelToggleNav = () => {
    setNavSelected((value) => !value);
  };

  return (
    <React.Fragment>
      <MenuBar selected={navSelected} onClick={handelToggleNav} />
      <div className={navBarStyle}>
        <ul>
          <li>
            <a onClick={handelToggleNav} href={"#/"}>
              about Me
            </a>
          </li>
          <li>
            <a onClick={handelToggleNav} href={"#/favnpm"}>fav npm</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
