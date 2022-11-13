import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Home page</h1>

      <hr />

      <Link to={"/students/create"}>Create A Student</Link>
      <hr />

      <Link to={"/students/list"}>List All Student</Link>
      <hr />
    </div>
  );
}
