import set from "lodash.set";
import React, { useState } from "react";

export default function StateExamples() {
  const [users, setUsers] = useState(defaultUsers); //  value , setter[] // default value is an array [u , u2]

  const handleOnChange = (event, index) => {
    console.log(event.target.value, index);

    const value = event.target.value;

    // 1. create new Ref

    const newUsers = [...users]; // chaninf array ref

    const currentUser = newUsers[index];
    currentUser.name = value;
    currentUser.address.city = `${value} lives in ${value}`;

    setUsers(newUsers);
    // setUsers(users=>newUsers);

    // DO NOT DO THIS
    // users[index].name = value;
  };

  return (
    <table>
      <UserDetails></UserDetails>
      {users.map((user, index) => (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.address.city}</td>
          <td>
            <input
              onChange={(event) => handleOnChange(event, index)}
              type="text"
              placeholder="Type Name to Update"
            />
          </td>
        </tr>
      ))}
    </table>
  );
}

function UserDetails(props) {
  const [user, setUser] = useState(defaultUsers[1]); //{}
  const [keyToUpdate, setkeyToUpdate] = useState("");
  const handleOnChange = (event) => {
    const value = event.target.value;

    const updatedUser = { ...user };
    if (!keyToUpdate) {
      return alert("Type Key First");
    }

    console.log({ keyToUpdate });
    set(updatedUser, keyToUpdate, value);
    // updatedUser[keyToUpdate] = value;

    setUser(updatedUser);
  };

  const handleKeyChange = (event) => {
    const key = event.target.value;
    setkeyToUpdate(key);
    console.log({ key });
  };

  return (
    <div>
      Key :{" "}
      <input
        onChange={(event) => handleKeyChange(event)}
        type="text"
        placeholder="Type Key to Update"
      />
      Value :{" "}
      <input
        onChange={(event) => handleOnChange(event)}
        type="text"
        placeholder="Type Name to Update"
      />
      <pre>{JSON.stringify(user, null, 2)}</pre>;
    </div>
  );
}

const defaultUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];
