import React, { useState } from "react";
import DatePicker from "components/DatePicker";
import Button from "components/Button";
import SelectInput from "components/Select";
import Dropdown from "components/Dropdown";
import ListCards from "components/ListCards";
import { createRoundTrip } from "utils/func";
import { CITIES, FLIGHTS_TYPES, CLASS_TYPES, FLIGHTS } from "utils/mock";

const Book = () => {
  const cities = useState(CITIES)[0];
  const [fromCity, setFromCity] = useState({}); // city origin
  const [toCity, setToCity] = useState({}); // city destination
  const [flightType, setFlightType] = useState(""); // one_way, round_trip
  const [classType, setClassType] = useState(""); // primary, economic
  const [flights, setFlights] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (Object.keys(fromCity).length <= 0) {
      alert("Select Origin");
      return;
    }
    if (Object.keys(toCity).length <= 0) {
      alert("Select Destination");
      return;
    }
    if (Object.keys(flightType).length <= 0) {
      alert("Select Flight Type");
      return;
    }

    if (Object.keys(classType).length <= 0) {
      alert("Select Class Type");
      return;
    }
    const tempFlight = FLIGHTS.filter((item) => item.class === classType.code);
    if (flightType.code === "round_trip") setFlights(createRoundTrip(tempFlight, "round_trip"));
    else setFlights(createRoundTrip(tempFlight));
  };

  // filter the cities no selected respectively
  const citiesTo = cities.filter((city) => city.code !== fromCity.code);
  const citiesFrom = cities.filter((city) => city.code !== toCity.code);

  return (
    <div className="book">
      <p>Search hundreds of travel sites at once</p>
      <div className="book__filter">
        <SelectInput options={FLIGHTS_TYPES} handleSelect={setFlightType} placeholder="Select Flight Type" />
        <SelectInput options={CLASS_TYPES} handleSelect={setClassType} placeholder="Select Class Type" />
        <Dropdown />
      </div>

      <form className="book__form" onSubmit={handleSubmit}>
        <div className="book__select">
          <SelectInput options={citiesFrom} handleSelect={setFromCity} placeholder={"Select Origin "} type={"from"} />
          <SelectInput options={citiesTo} handleSelect={setToCity} placeholder={"Select Destination"} type={"to"} />
          <DatePicker />
          {flightType.code !== "one_way" && <DatePicker />}
          <Button>Search</Button>
        </div>
      </form>
      <ListCards flights={flights} />
    </div>
  );
};

export default Book;
