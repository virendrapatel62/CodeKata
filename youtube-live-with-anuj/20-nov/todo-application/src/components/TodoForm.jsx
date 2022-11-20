import React, { useRef } from "react";
import { useEffect } from "react";

export default function TodoForm(props) {
  const inputRef = useRef();

  useEffect(() => {}, []); // [] =>dep array

  const onAdd = (event) => {
    event.preventDefault();
    const { value } = inputRef.current;
    props.onTodoAdd(value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={onAdd} className="todo-form">
        <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
