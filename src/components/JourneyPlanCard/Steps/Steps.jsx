import React from "react";
import "./Steps.scss";
import Step from "./Step";

const Steps = ({ data }) => (
  <div>
    {data.map((stepData, i) => (
      <Step key={i} data={stepData} />
    ))}
  </div>
);

export default Steps;
