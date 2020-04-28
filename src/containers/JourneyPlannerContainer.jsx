import React, { Component } from "react";
import JourneyPlanner from "../components/JourneyPlanner";
import { connect } from "react-redux";

import {
  changePlannerStationsNames,
  changePlannerJourneyOptions,
  changePlannerIsLoading,
} from "../store/planner/actions";

const mapStateToProps = (state) => {
  return {
    stationsNames: state.planner.stationsNames,
    journeyOptions: state.planner.journeyOptions,
    isLoading: state.planner.isLoading,
  };
};

const mapDispatchToProps = {
  changePlannerStationsNames,
  changePlannerJourneyOptions,
  changePlannerIsLoading,
};

class PlannerContainer extends Component {
  render() {
    return (
      <JourneyPlanner
        stationsNames={this.props.stationsNames}
        journeyOptions={this.props.journeyOptions}
        isLoading={this.props.isLoading}
        changePlannerJourneyOptions={this.props.changePlannerJourneyOptions}
        changePlannerStationsNames={this.props.changePlannerStationsNames}
        changePlannerIsLoading={this.props.changePlannerIsLoading}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlannerContainer);
