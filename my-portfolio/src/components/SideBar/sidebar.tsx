import React, { FunctionComponent } from "react";
import "./sidebar.css";

type Props = {
  header: React.ReactNode;
};

const SideBar: FunctionComponent<Props> = (props) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        {props.header}
      </div>
      <div className="sidebar-body">{props.children}</div>
    </div>
  );
};

export default SideBar;
