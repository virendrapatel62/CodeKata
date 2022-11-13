// /students/create

import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";
import { addStudent } from "~/data/student.server";

export default function CreateStudentPage() {
  return (
    <div>
      <h1>Create Student</h1>
      <hr />

      <Link to={"/"}>Go To Home</Link>

      <hr />
      <form method="post">
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" name="firstName" />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="lastName" />
        </div>

        <br />
        <div>
          <input type="submit" value="Create Student" />
        </div>
      </form>
    </div>
  );
}

export async function action(data) {
  const { request } = data;
  const formData = await request.formData();
  let student = Object.fromEntries(formData);

  const result = await addStudent(student);
  return redirect("/students/create");
}
