import React from "react";
import { Team, Title, VisionMission } from "../features/About";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <Title />
      <Team />
      <VisionMission />
    </div>
  );
};

export default About;
