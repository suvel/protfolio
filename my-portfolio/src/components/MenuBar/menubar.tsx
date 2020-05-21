import React, { FunctionComponent } from "react";
import classnames from "classnames";
import "./menubar.css";

type Props = {
  onClick: () => void;
  selected: boolean;
};

const MenuBar: FunctionComponent<Props> = (props) => {
  const { selected } = props;
  const menuBarStyle = classnames({
    "menubar-select": selected,
    "menubar": true,
  });
  const { onClick } = props;
  return <div onClick={onClick} className={menuBarStyle}></div>;
};

export default MenuBar;
