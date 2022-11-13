import { Link, useLoaderData, useSubmit } from "@remix-run/react";
import { deleteStudent, getAllStudent } from "~/data/student.server";

export default function StudentListPage() {
  const { students } = useLoaderData();

  const submit = useSubmit();

  const handleDelete = (event) => {
    console.log("Form is Submitgigng.");
    event.preventDefault();
    submit(event.target, {
      method: "delete",
    });
  };
  return (
    <div>
      <h1>Student List</h1>
      <hr />

      <Link to={"/"}>Go To Home</Link>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <form onSubmit={handleDelete}>
                  <input
                    type="number"
                    hidden
                    name="id"
                    value={student.id}
                    readOnly
                  />
                  <button type="submit" className="delete-button">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot></tfoot>
      </table>
    </div>
  );
}

export async function loader() {
  return {
    students: await getAllStudent(),
  };
}

export async function action(data) {
  const { request } = data;
  const formData = await request.formData();
  const studentID = formData.get("id");

  deleteStudent(studentID);
  return {};
}
