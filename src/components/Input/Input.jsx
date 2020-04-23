import React from 'react';
import './Input.scss';

const Input = ({
	onChange, type, name, value
}) => { 
	return(
  <label>
	  {name ? `${name}:` : ''}
	  <input
	  type={type}
	  value={value}
	  name={name}
	  onChange={onChange}
	  />
	</label>
)};

export default Input;
