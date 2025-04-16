import React from "react";
import DevServiceData from "../../Common/DevServiceData.json";
import OddServiceList from "./OddServiceList";
import EvenServicesList from "./EvenServicesList";

type Props = {
  DevServiceData: any;
};

const ServicesList = (props: Props) => {
  return (
    <div className="space-y-6">
      {DevServiceData.development_services.map((service, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <OddServiceList service={service} index={index} />
          ) : (
            <EvenServicesList service={service} index={index} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
