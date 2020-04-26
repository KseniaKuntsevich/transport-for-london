import React, { Component } from "react";
import "./Journey.scss";
import getJourney from "../../utils/getJourney";
import JourneyPlanCard from "../JourneyPlanCard";

class Journey extends Component {
  constructor(options) {
    super(options);
    this.prevOptions = {};
  }

  setJourneyData() {
    const { from, to, time, date } = this.props.options;
    if (!from || !to) {
      return;
    }
    getJourney({ from, to, time, date }).then((journeyData) => {
      this.props.changeJourneyData(journeyData);
    });
  }

  componentDidUpdate() {
    const { options } = this.props;
    if (JSON.stringify(options) !== JSON.stringify(this.prevOptions)) {
      this.prevOptions = { ...options };
      this.setJourneyData();
    }
  }

  componentDidMount() {
    this.setJourneyData();
  }

  render() {
    const { journeyData } = this.props;
    return (
      <div>
        {journeyData
          ? journeyData.map((data, i) => (
              <JourneyPlanCard data={data} key={i} />
            ))
          : ""}
      </div>
    );
  }
}

export default Journey;
