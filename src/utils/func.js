// cuando el viaje es one_way devuelve [[{}], [{}], [{}]]
// cuando el viaje es round_trip devuelve [[{},{}], [{},{}], [{},{}]]
const createRoundTrip = (data, option = "") => {
  if (!Array.isArray(data)) {
    throw TypeError("The argument <<datos>> must be an array");
  }
  if (option !== "round_trip") return data.map((flight) => [{ ...flight }]);

  const result = data.reduce((accumulatorValue, actualValue) => accumulatorValue.map((element) => [actualValue].concat(element)), [[]]);

  return result;
};

// search a elment from a list
const find = (data, list) => {
  return list.find((item) => item.code === data);
};

export { find, createRoundTrip };
