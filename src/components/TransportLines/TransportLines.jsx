import React, { Component } from "react";
import "./TransportLines.scss";
import LinesMap from "../LinesMap";
import Form from "../Form";
import Select from "../Select";
import Input from "../Input";
import getStationsNames from "../../utils/getStationsNames";
import getLines from "../../utils/getLines";

class TransportLines extends Component {
  constructor(props) {
    super(props);
    this.prevTarget = null;
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.stationsNames) {
      return;
    }
    getStationsNames().then((stationsNames) => {
      this.props.changeTransportLinesStationsNames(stationsNames);
    });
  }

  onFormSubmit({ target }) {
    if (target && this.prevTarget !== target) {
      getLines(target).then((data) => {
        this.props.changeTransportLinesData(data);
      });

      this.prevTarget = target;
    }
  }

  render() {
    const { stationsNames, linesData } = this.props;
    return (
      <div>
        <Form callback={this.onFormSubmit}>
          {stationsNames ? (
            <div>
              <Select
                label="All directions from station"
                name="target"
                options={stationsNames}
              />
              <Input type="submit" value="Go" />
            </div>
          ) : (
            ""
          )}
        </Form>
        <LinesMap lines={linesData} />
      </div>
    );
  }
}

export default TransportLines;

// <Map lat={LONDON_LATITUDE} lng={LONDON_LONDITUDE} zoom={10} />
