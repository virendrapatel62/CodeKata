import React, { Fragment } from "react";
import List from "./List";

export default function Users({ users = [], onClick }) {
  const data = users.map((user) => {
    return {
      id: user.id,
      title: user.firstName,
    };
  });
  return (
    <Fragment>
      <List heading={"All Users"} data={data} onClick={onClick}></List>
    </Fragment>
  );
}
