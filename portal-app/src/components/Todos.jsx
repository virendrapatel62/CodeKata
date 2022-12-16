import React, { Fragment } from "react";
import List from "./List";

export default function Todos({ todos = [], onClick }) {
  const data = todos.map((todo) => {
    return {
      id: todo.id,
      title: todo.todo,
    };
  });
  return (
    <Fragment>
      <List heading={"All Todos"} data={data} onClick={onClick}></List>
    </Fragment>
  );
}
