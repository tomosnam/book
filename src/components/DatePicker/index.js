import React from "react";
import "./DatePicker.css";

//id={start, end}

const index = ({ id }) => {
  return <input className="datepicker" type="date" id="start" name="trip-start" min="2021-09-24" max="2021-09-27" />;
};

export default index;
