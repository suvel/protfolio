import React, { FunctionComponent } from "react";
import { Emoji, Portfolio } from "../components";

const header = (
  <span>
    Current Project
    <Emoji symbol={"👨‍💻"} label={"guy-coding"} />
  </span>
);

const body = (
  <div>
    <p>
      The Current project that i am working on is "<strong>Admin portal</strong>
      " site where there are three level of user and each having their own set
      of authorization and data set . The "Tenant admin/Super admin" highest
      level of authority , they can create and manipulate tenant and tenant
      data."Tenant / admin " is the user who invite or create user and manage
      them. I have used Core UI bootstrap frame ,google-map-react (There is Tab
      for "Tenant/user" where we mark the user data on their respective
      co-ordinates, the client wanted a heat-map like functionality on this tab
      so we used google-map-react to achieve that),points-cluster (I used
      clustering techniques to group the users because we had a problem in
      "google-map-react" as its markers where overlapping each other while
      zooming out.) , react-idle-timer (I also maintain session in this
      project,with the help of "react-idle-timer" we notify the user about their
      ideal state,when the individual do not make any "mouse movement" or "key
      press" the ideal listener is triggered), firebase and redux.
    </p>
  </div>
);

const CurrentProject: FunctionComponent = () => {
  return <Portfolio header={header} body={body} />;
};

export default CurrentProject;
