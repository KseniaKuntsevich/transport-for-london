import React from "react";
import TransportLinesContainer from "../../containers/TransportLinesContainer";
import JourneyPlannerContainer from "../../containers/JourneyPlannerContainer";
import "./App.scss";

const App = () => (
  <div className="app">
    <TransportLinesContainer />
    <JourneyPlannerContainer />
  </div>
);

export default App;
