import React, { Component } from "react";
import JourneyPlanner from "../components/JourneyPlanner";
import { connect } from "react-redux";

import {
  changePlannerStationsNames,
  changePlannerJourneyOptions,
} from "../store/planner/actions";

const mapStateToProps = (state) => {
  return {
    stationsNames: state.planner.stationsNames,
    journeyOptions: state.planner.journeyOptions,
  };
};

const mapDispatchToProps = {
  changePlannerStationsNames,
  changePlannerJourneyOptions,
};

class PlannerContainer extends Component {
  render() {
    return (
      <JourneyPlanner
        stationsNames={this.props.stationsNames}
        journeyOptions={this.props.journeyOptions}
        changePlannerJourneyOptions={this.props.changePlannerJourneyOptions}
        changePlannerStationsNames={this.props.changePlannerStationsNames}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlannerContainer);
