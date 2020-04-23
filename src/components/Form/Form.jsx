import React, { Component } from "react";
import Input from "../Input";
import "./Form.scss";

class Form extends React.Component {
  constructor(callback) {
    super(callback);
    this.callbackData = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.callbackData[name] = value;
  }

  handleSubmit(event) {
    this.props.callback(Object.assign(this.callbackData));
    event.preventDefault();
  }

  render() {
    return (
      <form
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        className="form"
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
