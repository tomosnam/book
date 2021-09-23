const FLIGHTS = [
  {
    id: "1",
    type: "directo",
    direction: "one_way",
    date: "2021-09-24",
  },

  {
    id: "2",
    type: "directo",
    direction: "one_way",
    date: "2021-09-27",
  },

  {
    id: "3",
    type: "directo",
    direction: "one_way",
    date: "2021-09-27",
  },
  {
    id: "4",
    type: "directo",
    direction: "one_way",
    date: "2021-09-24",
  },
  {
    id: "5",
    type: "directo",
    direction: "one_way",
    date: "2021-09-27",
    class: "economic",
  },
  {
    id: "6",
    type: "directo",
    direction: "one_way",
    date: "2021-09-24",
    class: "economic",
  },
  {
    id: "7",
    type: "directo",
    direction: "one_way",
    date: "2021-09-27",
    class: "primary",
  },
  {
    id: "8",
    type: "directo",
    direction: "one_way",
    date: "2021-09-24",
    class: "primary",
  },
];
const CITIES = [
  { title: "Ciudad de México", code: "CDMX" },
  { title: "Puebla", code: "PUE" },
  { title: "Monterrey", code: "MRE" },
  { title: "Guardalajara", code: "GDR" },
];

const FLIGHTS_TYPES = [
  { title: "One Way", code: "one_way" },
  { title: "Round Trip", code: "round_trip" },
];
const CLASS_TYPES = [
  { title: "Primary", code: "primary" },
  { title: "Economic", code: "economic" },
];
export { CITIES, FLIGHTS, FLIGHTS_TYPES, CLASS_TYPES };
