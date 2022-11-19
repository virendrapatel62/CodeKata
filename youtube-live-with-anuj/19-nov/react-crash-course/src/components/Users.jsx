import React from "react";
import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const addMore = () => {
    console.log("Adding more students");
    setUsers([...users, "virendra"]);
  };

  return (
    <div>
      <button onClick={addMore}>Click me to add more</button>
      {users.map((user, index) => (
        <h1 key={index}>
          {index + 1} {user}
        </h1>
      ))}
    </div>
  );
}
