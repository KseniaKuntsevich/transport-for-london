import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => {
            return (
              <li
                key={index}
                data-item-index={index}
                onClick={(e) => {
                  let index = parseInt(e.target.dataset.itemIndex);
                  this.props.changeMenuActive(index);
                }}
                className={
                  this.props.active === index
                    ? "vertical-navbar active"
                    : "vertical-navbar"
                }
              >
                {item.header}
              </li>
            );
          })}
        </ul>
        <div>{this.props.items[this.props.active].body}</div>
      </div>
    );
  }
}

export default Menu;
