import React, { FunctionComponent } from "react";
import "./unitnpm.css";
type Prop = {
  label: string;
  link: string;
};
const Unitnpm: FunctionComponent<Prop> = (props) => {
  const { link } = props;
  const handelOpenLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <span onClick={() => handelOpenLink(link)} className="unitnpm">
      {props.label}
    </span>
  );
};
export default Unitnpm;
