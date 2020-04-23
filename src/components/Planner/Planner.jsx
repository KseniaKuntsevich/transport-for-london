import React, { Component } from "react";
import Form from "../Form";
import Select from "../Select";
import Journey from "../Journey";
import getJourney from "../../utils/getJourney";
import getStationsNames from "../../utils/getStationsNames";
import "./Planner.scss";

import Input from "../Input";

class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationsNames: JSON.parse(localStorage.getItem("stationsNames")),
      journeyOptions: {
        from: null,
        to: null,
      },
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.stationsNames) {
      return;
    }
    getStationsNames().then((stationsNames) => {
      this.setState({ stationsNames });
      localStorage.setItem("stationsNames", JSON.stringify(stationsNames));
    });
  }

  onFormSubmit({ from, to, time, date }) {
    const updated = Object.assign(this.state.journeyOptions, { from, to });
    this.setState({ journeyOptions: updated });
  }

  render() {
    const { stationsNames, journeyOptions } = this.state;
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
        <Journey options={journeyOptions} />
      </div>
    );
  }
}

export default Planner;
