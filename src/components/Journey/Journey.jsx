import React from "react";
import "./Journey.scss";
import JourneyPlanCard from "../JourneyPlanCard";

const Journey = ({ options }) => (
  <div className="journey">
    {options.map((data, i) => (
      <JourneyPlanCard key={i} data={data} />
    ))}
  </div>
);

export default Journey;
