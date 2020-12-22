import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => (
          <li key={`user-${user.id}`}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h4>{user.login}</h4>
              <a href={user.html_url}>profile</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
