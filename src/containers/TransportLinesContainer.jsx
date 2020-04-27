import React, { Component } from "react";
import TransportLines from "../components/TransportLines";
import { connect } from "react-redux";

import {
  changeTransportLinesStationsNames,
  changeTransportLinesData,
} from "../store/transportLines/actions";

const mapStateToProps = (state) => {
  return {
    stationsNames: state.transportLines.stationsNames,
    linesData: state.transportLines.linesData,
  };
};

const mapDispatchToProps = {
  changeTransportLinesStationsNames,
  changeTransportLinesData,
};

class TransportLinesContainer extends Component {
  render() {
    return (
      <TransportLines
        stationsNames={this.props.stationsNames}
        linesData={this.props.linesData}
        changeTransportLinesStationsNames={
          this.props.changeTransportLinesStationsNames
        }
        changeTransportLinesData={this.props.changeTransportLinesData}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportLinesContainer);
