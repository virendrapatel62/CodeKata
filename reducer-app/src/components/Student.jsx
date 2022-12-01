import React from "react";

export default function Student({ student, onDelete }) {
  console.log(student);
  const { firstName, lastName, age, email, id } = student;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-sm btn-danger" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
