import React, { FunctionComponent } from "react";
import { Emoji, Portfolio } from "../components";

const header = (
  <span>
    About <strong>Me</strong>
    <Emoji symbol={"🤘"} label={"hand-rock"} />
  </span>
);

const body = (
  <div>
    <p>
      I am from Chennai , its going to be a <strong>yearlong</strong> as a
      Software Trainee at Soft Suave,Bangalore. Currently working in a React{" "}
      <Emoji symbol={"⚛️"} label={"react-symbol"} /> , Firebase{" "}
      <Emoji symbol={"🔥"} label={"firebase-symbol"} /> and Core UI ( Bootstrap
      Admin Template ) based project. I am handling the frontend of the project
      , have used the React class Component to develop the component .
    </p>
  </div>
);

const LandingPage: FunctionComponent = () => {
  return <Portfolio header={header} body={body} />;
};

export default LandingPage;
