import React, { FunctionComponent } from "react";
import { Emoji, Portfolio, Unitnpm } from "../../components";

const header = (
  <span>
    fav. <strong>npm</strong>
    <Emoji symbol={"⚙️"} label={"hand-claps"} />
  </span>
);

const npmList = [
  { name: "lodash" },
  { name: "classnames" },
];

const getAllnpm = () => {
  return (
    <div style={{ display: "flex" }}>
      {npmList.map((npm) => (
        <Unitnpm label={npm.name} />
      ))}
    </div>
  );
};

const body = <div>{getAllnpm()}</div>;

const FavnpmPage: FunctionComponent = () => {
  return <Portfolio header={header} body={body} />;
};

export default FavnpmPage;
