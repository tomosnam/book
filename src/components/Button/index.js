import React from "react";
import "./Button.css";

const Button = ({ name = "", children } = {}) => {
  return <button className="btn">{children}</button>;
};

export default Button;
