import React from "react";
import { ServicesList, Title } from "../features/Services";

type Props = {};

const Service = (props: Props) => {
  return (
    <div>
      <Title />
      <ServicesList />
    </div>
  );
};

export default Service;
