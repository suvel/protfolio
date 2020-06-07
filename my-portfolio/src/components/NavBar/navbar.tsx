import React, { FunctionComponent, useState } from "react";
import { MenuBar } from "../";
import { NavLink } from "react-router-dom";
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
            <NavLink onClick={handelToggleNav} to={"/about-me"}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handelToggleNav} to={"/worked-on-lib"}>
              Worked on lib
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handelToggleNav} to={"/current-project"}>
              Current project
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handelToggleNav} to={"/current-work-status"}>
              Current work status
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handelToggleNav} to={"/works-and-contact"}>
              Work and Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
