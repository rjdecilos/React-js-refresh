import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random message",
  });

  const onChangeMessage = () => {
    setPerson({
      ...person,
      message: "Hello World",
    });
  };

  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState("Random message");

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={onChangeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
