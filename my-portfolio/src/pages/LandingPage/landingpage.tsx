import React, { FunctionComponent } from "react";
import { MainContainer, SideBar, Emoji } from "../../components";
const landingpage: FunctionComponent = () => {
  return (
    <MainContainer>
      <SideBar
        header={
          <span>
            About <strong>Me</strong>
            <Emoji symbol={"🤘"} label={"hand-rock"} />
          </span>
        }
      >
        <div>
          <p>
            I am from Chennai , its going to be a decaed as a Software Trainee
            at Soft Suave,Bangalore. Currently working in a React{" "}
            <Emoji symbol={"⚛️"} label={"react-symbol"} /> , Firebase{" "}
            <Emoji symbol={"🔥"} label={"firebase-symbol"}/> and Core UI
            ( Bootstrap Admin Template ) based project. I am handling the
            frontend of the project , have used the React class Component to
            develop the component .
          </p>
        </div>
      </SideBar>
    </MainContainer>
  );
};

export default landingpage;
