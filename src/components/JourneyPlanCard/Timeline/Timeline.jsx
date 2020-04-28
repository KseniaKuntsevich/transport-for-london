import React from "react";
import "./Timeline.scss";
let options = { hour: "numeric", minute: "numeric" };

const Timeline = (
  { start, end } // Date time
) => (
  <div className="timeline">
    {new Date(start).toLocaleString("en-GB", options)}
    {` - `}
    {new Date(end).toLocaleString("en-GB", options)}
  </div>
);

export default Timeline;
