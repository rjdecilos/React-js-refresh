import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), firstName, email },
      ]);
      setFirstName("");
      setEmail("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "firstName") setFirstName(e.target.value);
    else setEmail(e.target.value);
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => (
          <div className="item" key={`person-${person.id}`}>
            <h4>{person.firstName}</h4>
            <p>{person.email}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ControlledInputs;
