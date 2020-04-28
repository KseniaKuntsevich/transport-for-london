import React from "react";
import "./Journey.scss";
import JourneyPlanCard from "../JourneyPlanCard";

const Journey = ({ options }) => (
  <div>
    {options.map((data, i) => (
      <JourneyPlanCard key={i} data={data} />
    ))}
  </div>
);

export default Journey;
