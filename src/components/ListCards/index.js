import React from "react";
import Card from "components/Card";
import Button from "components/Button";

const ListCards = ({ flights = [] } = {}) => {
  return (
    <div className="book__result">
      {flights?.map((arrflight, index) => (
        <Card key={index}>
          <div className="book__result-flex">
            {arrflight?.map((single) => (
              <div className="book__result-space" key={single.id}>
                <li>Vuelo</li>
                <li>{single.id}</li>
                <li>{single.direction}</li>
                <li>{single.class}</li>
                <li>{single.date}</li>
              </div>
            ))}

            {/* <Button>Add</Button> */}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ListCards;
