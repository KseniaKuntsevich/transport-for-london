import React, { Component } from "react";
import Menu from "../components/Menu";
import { connect } from "react-redux";

import { changeMenuActive } from "../store/menu/actions";

const mapStateToProps = (state) => {
  return {
    active: state.menu.active,
  };
};

const mapDispatchToProps = {
  changeMenuActive,
};

class JourneyContainer extends Component {
  render() {
    return (
      <Menu
        active={this.props.active}
        items={this.props.items}
        changeMenuActive={this.props.changeMenuActive}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JourneyContainer);
