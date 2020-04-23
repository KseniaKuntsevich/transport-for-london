import React, { Component } from "react";
import "./Journey.scss";
import getJourney from "../../utils/getJourney";
import JourneyPlanCard from "../JourneyPlanCard";

class Journey extends Component {
  constructor(options) {
    super(options);
    this.options = this.props.options;
    this.prevOptions = {};
    this.state = {
      journeys: null,
    };
  }

  setJourneyData() {
    const { from, to, time, date } = this.options;
    if (!from || !to) {
      return;
    }

    getJourney({ from, to, time, date }).then((journeys) => {
      this.setState({ journeys: journeys });
    });
  }

  componentDidUpdate() {
    const { options, prevOptions } = this
    if (
      JSON.stringify(options) !== JSON.stringify(prevOptions)
    ) {
      this.prevOptions = { ...options }
      this.setJourneyData();
    }
  }

  componentDidMount() {
    this.setJourneyData();
  }

  render() {
    const { journeys } = this.state;
    return (
      <div>
        {journeys
          ? journeys.map((data, i) => <JourneyPlanCard data={data} key={i} />)
          : ""}
      </div>
    );
  }
}

export default Journey;
