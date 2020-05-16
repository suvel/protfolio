import React, { FunctionComponent } from "react";
import { MainContainer, SideBar } from "../../components";

type Props = {
  header: React.ReactNode;
  body: React.ReactNode;
};

const Portfolio: FunctionComponent<Props> = (props) => {
  return (
    <MainContainer>
      <SideBar header={props.header}>{props.body}</SideBar>
    </MainContainer>
  );
};

export default Portfolio;
