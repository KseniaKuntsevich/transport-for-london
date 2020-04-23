import React from "react";
import "./Select.scss";

const Select = ({
  name,
  label,
  options, // [{id, option, value}]
}) => {
  return (
    <label>
      {label ? `${label}:` : ""}
      <select name={name}>
        <option />
        {options.map((item, i) => {
          const { id = i, value, option } = item;
          return (
            <option key={id} value={value ? value : option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
