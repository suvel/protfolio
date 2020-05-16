import React, { FunctionComponent } from "react";
import "./unitnpm.css";
type Prop = {
  label: string;
};
const Unitnpm: FunctionComponent<Prop> = (props) => {
  return <span className="unitnpm">{props.label}</span>;
};
export default Unitnpm;
