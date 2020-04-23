import React, { Component } from 'react';
import Input from '../Input';
import './Form.scss';


class Form extends React.Component {
  constructor(callback, inputs) {
    super(callback, inputs);
    this.callbackData = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
  	const { name, value } = event.target
    this.callbackData[name] = value;
  }


  handleSubmit(event) {
  	this.props.callback(Object.assign(this.callbackData))
    event.preventDefault();
  }
  

  render() {
    return (
	    <form onSubmit={this.handleSubmit} className="form">
	      {this.props.inputs.map(descrip =>
	        <Input
	        key={descrip.name}
	        type={descrip.type}
	        name={descrip.name}
	        value={descrip.value}
	        onChange={this.handleChange}
	        />
	      )}
	    </form>
      )
    }
};

export default Form;
