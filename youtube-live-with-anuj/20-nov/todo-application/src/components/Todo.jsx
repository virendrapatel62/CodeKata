import React, { Fragment } from "react";

export default function Todo({ todo, onDelete }) {
  console.log(todo.isDeleted);

  return (
    <li onClick={onDelete}>
      {todo.isDeleted ? <del>{todo.todo}</del> : todo.todo}
    </li>
  );
}
