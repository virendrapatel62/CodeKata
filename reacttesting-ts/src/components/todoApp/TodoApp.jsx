import React from "react";
import { useState } from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      <h4>Todo List</h4>
      <hr />
      <ul className="list-group" data-testid="todo-list">
        {todos.map((todo, index) => (
          <li className="list-group-item" key={todo.id}>
            {index + 1}: {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TodoForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const onChange = ({ target: { value } }) => {
    console.log({
      value,
    });
    setTitle(value);
  };

  const handleOnTodoAdd = () => {
    if (!title.trim()) {
      setError("please enter todo");
      return;
    }

    onCreate(title);
  };
  return (
    <div>
      <h4>Add New</h4>
      <hr />
      <input
        data-testid="todo-input"
        className="form-control"
        onChange={onChange}
        placeholder="Learn React"
        name="title"
      ></input>

      <hr />

      <button
        id="add-todo-button"
        className="btn btn-tomato"
        onClick={handleOnTodoAdd}
      >
        Add Todo
      </button>
    </div>
  );
};

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const onCreate = (todo) => {
    setTodos([
      ...todos,
      {
        title: todo,
        id: todos.length + 1,
      },
    ]);
  };
  return (
    <div className="shadow p-4">
      <h1>Todo App</h1>
      <hr />
      <div className="row">
        <div className="col border p-3">
          <TodoForm onCreate={onCreate}></TodoForm>
        </div>
        <div className="col border p-3">
          <TodoList todos={todos}></TodoList>
        </div>
      </div>
    </div>
  );
}
