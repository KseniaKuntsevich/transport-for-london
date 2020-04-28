import React, { Component } from "react";
import Form from "../Form";
import Select from "../Select";
import Journey from "../Journey";
import getStationsNames from "../../utils/getStationsNames";
import getJourney from "../../utils/getJourney";
import Input from "../Input";
import "./JourneyPlanner.scss";

class JourneyPlanner extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.prevRequestParams = null;
  }

  componentDidMount() {
    if (!this.props.stationsNames) {
      getStationsNames().then((stationsNames) => {
        this.props.changePlannerStationsNames(stationsNames);
      });
    }
  }

  onFormSubmit({ from, to, time, date }) {
    if (!from || !to || from === to) {
      alert("Try another destination");
      return;
    }
    if (
      JSON.stringify(this.prevRequestParams) ===
      JSON.stringify({ from, to, time, date })
    ) {
      return;
    }
    this.prevRequestParams = { from, to, time, date };
    this.props.changePlannerIsLoading(true);
    getJourney({ from, to, time, date }).then((journeyOptions) => {
      this.props.changePlannerJourneyOptions(journeyOptions);
      this.props.changePlannerIsLoading(false);
    });
  }

  render() {
    const { stationsNames, journeyOptions, isLoading } = this.props;
    return (
      <div>
        <Form callback={this.onFormSubmit}>
          {stationsNames ? (
            <div>
              <Select label="From" name="from" options={stationsNames} />
              <Select label="To" name="to" options={stationsNames} />
              <Input type="submit" value="Get a Plan" />
            </div>
          ) : (
            ""
          )}
        </Form>
        {journeyOptions && !isLoading ? (
          <Journey options={journeyOptions} />
        ) : (
          ""
        )}
        {isLoading ? <div>Waiting for response...</div> : ""}
      </div>
    );
  }
}

export default JourneyPlanner;
