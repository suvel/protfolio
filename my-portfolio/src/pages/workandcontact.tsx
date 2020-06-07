import React, { FunctionComponent } from "react";
import { Emoji, Portfolio } from "../components";

const header = (
  <span>
    Work and Contact
    <Emoji symbol={"📢"} label={"loud-speaker"} />
  </span>
);

const body = (
  <div style={{textAlign:"center"}}>
    <h1>Works</h1>
    <ul>
      <li>
        <a target="_blank" href={"https://github.com/suvel"}>
          Git Repo
        </a>
      </li>
      <li>
        <a target="_blank" href={"https://www.behance.net/findsuvele2f1"}>
          Behance
        </a>
      </li>
    </ul>
    <h1>Contact</h1>
    <ul>
      <li>
        <a href="mailto:suvel@softsuave.com">Contact Me</a>
      </li>
      <li>
        <a href="mailto:find.suvel@gmail.com">Send you Feed back</a>
      </li>
    </ul>
  </div>
);

const WorkAndContact: FunctionComponent = () => {
  return <Portfolio header={header} body={body} />;
};

export default WorkAndContact;
