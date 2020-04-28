import React from "react";
import "./Step.scss";
import Timeline from "../../Timeline";

const Step = ({ data }) => {
  const {
    duration,
    departureTime,
    arrivalTime,
    departurePoint,
    arrivalPoint,
    path,
  } = data;
  return (
    <div className="step">
      <div className="step-header">
        {duration} min
        <Timeline start={departureTime} end={arrivalTime} />
      </div>
      <div className="title">
        {departurePoint.commonName}
        {` - `}
        {arrivalPoint.commonName}
      </div>
      <div className="body">
        Stop points:
        <ul className="list">
          {path.stopPoints.map((stopPoint, i) => (
            <li key={i}>{stopPoint.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Step;
