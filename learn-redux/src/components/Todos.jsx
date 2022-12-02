import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  const onChange = (value) => {
    dispatch({
      type: "NEW_TODO",
      payload: {
        title: value,
      },
    });
  };

  return (
    <div>
      <h1>Todos</h1>

      <Input onChange={onChange} getValueOnEnter></Input>

      <div>
        <ul class="list-group">
          {todos.map((todo, index) => {
            return (
              <li key={index} class="list-group-item">
                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
