import React, { useId } from "react";
import Todo from "./Todo";

export default function Todos(props) {
  const { todos, onDelete } = props;
  // const id = useId();

  console.log("Inside TODOS ", todos);
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return (
          <Todo onDelete={() => onDelete(todo)} todo={todo} key={todo.id} />
        );
      })}
    </ul>
  );
}
