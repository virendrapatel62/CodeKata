import { Link } from "@remix-run/react";

export default function Homepage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/todos">Go To Todos</Link>
      <br />
      <br />
      <Link to="/todos/add">Create Todo</Link>
    </div>
  );
}
