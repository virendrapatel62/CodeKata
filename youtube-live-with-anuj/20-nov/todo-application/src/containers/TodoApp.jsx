import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { getAllTodos, saveTodos } from "../services/todoService";

export default function TodoApp() {
  const [todos, setTodos] = useState(getAllTodos()); // return [value , setter ]
  const onAdd = (todo) => {
    const newTodo = {
      todo,
      id: Date.now(),
    };
    const newTodos = [...todos, newTodo];
    saveTodos(newTodos);
    setTodos(newTodos);
  };
  // useEffect(() => {
  //   const todos = getAllTodos();
  //   setTodos(todos);
  //   console.log("Reading");
  // }, []);

  // useEffect(() => {
  // saveTodos(todos);
  //   console.log("Writing");
  // }, [todos]);

  const deleteHandler = (todo) => {
    const index = todos.findIndex((t) => t.id === todo.id);
    const foundTodo = todos[index];

    foundTodo.isDeleted = !foundTodo.isDeleted;

    saveTodos([...todos]);
    setTodos([...todos]);
  };

  return (
    <div className="todo-app">
      <TodoForm onTodoAdd={onAdd} />
      <Todos todos={todos} onDelete={deleteHandler} />
    </div>
  );
}
