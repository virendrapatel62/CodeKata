import React, { useReducer } from "react";
import Student from "../components/Student";
import StudentForm from "../components/StudentForm";
import { students } from "./data";

const actions = {
  CLEAR_STUDENTS: "CLEAR_STUDENTS",
  ADD_STUDENT: "ADD_STUDENT",
  DELETE_LAST: "DELETE_LAST",
  DELETE_FIRST: "DELETE_FIRST",
  DELETE: "DELETE",
};
function studentReducer(state, action) {
  console.log({ state, action });

  const { payload, type } = action;
  if (type === actions.CLEAR_STUDENTS) {
    return [];
  }

  if (type == actions.DELETE) {
    const newState = [...state];
    newState.splice(payload, 1);
    return newState;
  }

  // if (type == actions.DELETE_LAST) {
  //   const newState = [...state];
  //   newState.pop();
  //   return newState;
  // }

  // if (type == actions.DELETE_FIRST) {
  //   const newState = [...state];
  //   newState.shift();
  //   return newState;
  // }

  if (type === actions.ADD_STUDENT) {
    const newStudent = { id: state.length + 1 };
    Object.assign(newStudent, action.payload);
    return [...state, newStudent];
  }

  return state;
}

export default function Students() {
  const [students, dispatch] = useReducer(studentReducer, []);

  const onCreateStudent = (student) => {
    console.log("Dispatching payload");
    dispatch({
      type: actions.ADD_STUDENT,
      payload: student,
    });
  };

  const onClear = () => {
    dispatch({
      type: actions.CLEAR_STUDENTS,
    });
  };

  const onDelete = (index) => {
    dispatch({
      type: actions.DELETE,
      payload: index,
    });
  };

  return (
    <div className="container mt-4">
      <StudentForm onSubmit={onCreateStudent} />

      <button onClick={onClear} className="btn btn-danger m-2">
        Clear
      </button>

      <button
        onClick={() => onDelete(students.length - 1)}
        className="btn btn-info m-2"
      >
        Delete Last
      </button>

      <button onClick={() => onDelete(0)} className="btn btn-info m-2">
        Delete First
      </button>

      <div className="shadow mt-2">
        <table className="table">
          <StudentTableHead />
          <tbody>
            {students.map((student, index) => {
              return (
                <Student student={student} onDelete={() => onDelete(index)} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StudentTableHead() {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
  );
}
