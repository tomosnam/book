import React, { useState } from "react";
import { find } from "utils/func";
import "./SelectInput.css";

const SelectInput = ({ options, handleSelect, placeholder = "Select" } = {}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    let filterCity = "";
    let foundCity = find(event.target.value, options);
    if (foundCity) filterCity = foundCity;
    handleSelect(filterCity);
  };

  return (
    <>
      <select value={value} onChange={handleChange} placeholder={placeholder}>
        <option value="" className="noOption" disabled>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.code} value={option.code}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
