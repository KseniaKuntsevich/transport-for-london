import React from "react";
import "./Fare.scss";

const Fare = ({ amount, description }) => (
  <div className="fare">
    £ {(amount / 100).toFixed(2)} {description}
  </div>
);

export default Fare;
