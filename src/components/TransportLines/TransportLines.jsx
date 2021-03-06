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
    if (!this.props.stationsNames) {
      getStationsNames().then((stationsNames) => {
        this.props.changeTransportLinesStationsNames(stationsNames);
      });
    }
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
                label="All directions from the station"
                name="target"
                options={stationsNames}
              />
              <Input type="submit" value="Go" />
            </div>
          ) : (
            ""
          )}
        </Form>
        <div className="lines-map-container">
          <LinesMap lines={linesData} />
        </div>
      </div>
    );
  }
}

export default TransportLines;
