import React from "react";
import "./Input.scss";

const Input = ({ onChange, type, name, value, label, list }) => {
  return (
    <label>
      {label ? `${label}:` : ""}
      <input
        type={type}
        value={value}
        name={name}
        list={list}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
