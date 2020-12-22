import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleClearItems = () => {
    setPeople([]);
  };

  const handleRemoveItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      {people.map((person) => (
        <div key={`person-${person.id}`} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => handleRemoveItem(person.id)}>remove</button>
        </div>
      ))}
      <button className="btn" onClick={handleClearItems}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
