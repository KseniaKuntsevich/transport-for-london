import React, { Component } from "react";
import Form from "../Form";
import Select from "../Select";
import JourneyContainer from "../../containers/JourneyContainer";
import getStationsNames from "../../utils/getStationsNames";
import "./JourneyPlanner.scss";

import Input from "../Input";

class JourneyPlanner extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.stationsNames) {
      return;
    }
    getStationsNames().then((stationsNames) => {
      this.props.changePlannerStationsNames(stationsNames);
    });
  }

  onFormSubmit({ from, to, time, date }) {
    this.props.changePlannerJourneyOptions({ from, to, time, date });
  }

  render() {
    const { stationsNames, journeyOptions } = this.props;
    return (
      <div>
        <Form callback={this.onFormSubmit}>
          <div>
            {stationsNames ? (
              <div>
                <Select label="From" name="from" options={stationsNames} />
                <Select label="To" name="to" options={stationsNames} />
              </div>
            ) : (
              ""
            )}
            <Input type="submit" value="Get Plan" />
          </div>
        </Form>
        <JourneyContainer options={journeyOptions} />
      </div>
    );
  }
}

export default JourneyPlanner;
