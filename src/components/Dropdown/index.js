import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [totalAdult, setAdult] = useState(0);
  const [totalChild, setChild] = useState(0);

  const handleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const decrease = (option) => {
    if (option === "adult" && totalAdult > 0) {
      setAdult((preState) => preState - 1);
    } else if (totalChild > 0) {
      setChild((preState) => preState - 1);
    }
  };

  const add = (option) => {
    option === "adult" ? setAdult((preState) => preState + 1) : setChild((preState) => preState + 1);
  };

  return (
    <div className={`dropdown`}>
      <div className="dropdown__button" onClick={handleMenu}>
        {`${totalChild + totalAdult} Viajeros`}
      </div>
      <div className={`dropdown__list ${isOpen ? "open" : ""}`}>
        <div>
          Adultos <button onClick={() => decrease("adult")}>-</button>
          {totalAdult}
          <button onClick={() => add("adult")}> + </button>
        </div>
        <div>
          Niños <button onClick={() => decrease("child")}>-</button>
          {totalChild}
          <button onClick={() => add("child")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
