import React, { FunctionComponent } from "react";
import { Emoji, Portfolio, Unitnpm } from "../components";

const header = (
  <span>
    worked on <strong>lib</strong>
    <Emoji symbol={"⚙️"} label={"hand-claps"} />
  </span>
);

const npmList = [
  { name: "lodash", link: "https://www.npmjs.com/package/lodash" },
  { name: "classnames", link: "https://www.npmjs.com/package/classnames" },
  { name: "firebase", link: "https://www.npmjs.com/package/firebase" },
  {
    name: "google-map-react",
    link: "https://www.npmjs.com/package/google-map-react",
  },
  {
    name: "points-cluster",
    link: "https://www.npmjs.com/package/points-cluster",
  },
  {
    name: "react-idle-timer ",
    link: "https://www.npmjs.com/package/react-idle-timer",
  },
];

const getAllnpm = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {npmList.map((npm) => (
        <Unitnpm link={npm.link} label={npm.name} />
      ))}
    </div>
  );
};

const body = <div>{getAllnpm()}</div>;

const FavnpmPage: FunctionComponent = () => {
  return <Portfolio header={header} body={body} />;
};

export default FavnpmPage;
