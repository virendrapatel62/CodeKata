import React, { useCallback, useEffect, useMemo, useState } from "react";
import Student from "./Student";
import axios from "axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  const getAvgAge = () => {
    let sum = 0;
    students.forEach(({ age }) => {
      //   console.log("loop", age);
      sum += age;
    });
    return ~~(sum / students.length);
  };

  const handleStudentCardClick = useCallback(
    (student) => {
      console.log("Clicked on student CArd", student);
    },
    [students]
  );

  //   const [handleStudentCardClick, set] = useState(() => (student) => {
  //     console.log("Clicked on student CArd");
  //   });
  //   useEffect(() => {
  //     set(() => {
  //       return (student) => {
  //         console.log("Changed definations", student);
  //       };
  //     });
  //   }, [students]);

  console.log(handleStudentCardClick);

  // const handleStudentCardClick;

  const avgAge = useMemo(() => {
    return getAvgAge();
  }, [students]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        return response.data;
      })
      .then(({ users }) => {
        setStudents(users);
      });
  }, []);

  useEffect(() => {
    console.log("Rendering", StudentList.name);
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  const onFirstNameChange = ({ target: { value } }, index) => {
    const newState = [...students];
    const student = { ...newState[index] };
    student.firstName = value;
    newState[index] = student;
    setStudents(newState);
  };

  return (
    <div>
      <h1>Student List</h1>
      <button onClick={handleClick} className="btn btn-success">
        Click me to inc count
      </button>
      <h1>Count: {count}</h1>
      <h1>Average Age {avgAge}</h1>

      <div className="row">
        <div className="col">
          {students?.map((student) => {
            return (
              <Student
                onClick={handleStudentCardClick}
                student={student}
              ></Student>
            );
          })}
        </div>

        <div className="col">
          {students?.map((student, index) => {
            return (
              <div className="border border-success m-3 p-3">
                <input
                  onChange={(event) => onFirstNameChange(event, index)}
                  value={student.firstName}
                  type="text"
                  placeholder="Update First name"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
