import React, { Component } from "react";
import Journey from "../components/Journey";
import { connect } from "react-redux";

import { changeJourneyData } from "../store/journey/actions";

const mapStateToProps = (state) => {
  return {
    journeyData: state.journey.journeyData,
  };
};

const mapDispatchToProps = {
  changeJourneyData,
};

class JourneyContainer extends Component {
  render() {
    return (
      <Journey
        journeyData={this.props.journeyData}
        options={this.props.options}
        changeJourneyData={this.props.changeJourneyData}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JourneyContainer);
