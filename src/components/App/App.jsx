import React from "react";
import TransportLinesContainer from "../../containers/TransportLinesContainer";
import JourneyPlannerContainer from "../../containers/JourneyPlannerContainer";
import MenuContainer from "../../containers/MenuContainer";
import "./App.scss";

const App = () => (
  <div className="app">
    <MenuContainer
      items={[
        {
          header: "Get directions",
          body: <TransportLinesContainer />,
        },
        {
          header: "Plan a Journey",
          body: <JourneyPlannerContainer />,
        },
      ]}
    />
  </div>
);

export default App;
