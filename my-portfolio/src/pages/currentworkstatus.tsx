import React, { FunctionComponent } from "react";
import { Emoji, Portfolio } from "../components";

const header = (
  <span>
    Work status
    <Emoji symbol={"👔"} label={"formal-dress"} />
  </span>
);

const body = (
  <div>
    <p>
      I am software trainee at <strong>Soft Suave</strong>,bangalore. Soft Suave
      is a fast growing Information Technology (IT) company headquartered in one
      of the largest technology-hubs in India – Chennai with a sales office in
      Catonsville, MD – United States. Soft Suave is specialized in providing
      end-to-end IT Services and Solutions to mid-market and Fortune-500 across
      the USA, UK, Australia, France, Denmark, Iceland, UAE, and India. We have
      a significant expertise and a best-in-class track record in creating and
      delivering high-value IT-enabled business solutions. We provide rapid and
      cost-effective Enterprise Solutions in several key areas including Web
      Application Development, Mobile Application Development, Cloud Computing
      and Legacy Modernization. Soft Suave is an ISO 9001-2015 certified
      company.
    </p>
  </div>
);

const CurrentWorkStatus: FunctionComponent = () => {
  return <Portfolio header={header} body={body} />;
};

export default CurrentWorkStatus;
