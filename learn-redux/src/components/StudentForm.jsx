import { useRef } from "react";
import { useDispatch } from "react-redux";

function StudentForm() {
  const nameRef = useRef();
  const ageRef = useRef();
  const dispatch = useDispatch();
  const handleClick = () => {
    const name = nameRef.current.value;
    const age = ageRef.current.value;

    dispatch({
      type: "UPDATE_STUDENT",
      payload: {
        name,
        age,
      },
    });
  };
  return (
    <div>
      <div>
        Name :
        <input ref={nameRef} type="text" />
      </div>
      <br />
      <div>
        Age :
        <input ref={ageRef} type="text" />
      </div>
      <button onClick={handleClick}>Save Student</button>
    </div>
  );
}

export { StudentForm };
