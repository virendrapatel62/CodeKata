import { Link, useLoaderData } from "@remix-run/react";
import { getAllTodos } from "~/data";

import styles from "~/styles/todos.css";

// todos
export default function Todos() {
  const todos = useLoaderData();
  return (
    <div>
      <h1>Todos</h1>

      <Link to="/">Go To Home Page</Link>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {index + 1}. {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return [
    {
      title: "title",
      description: "TODOS PAGE",
    },
  ];
}

export function loader() {
  return getAllTodos();
}
