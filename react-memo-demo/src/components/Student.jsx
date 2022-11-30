import React, { useEffect } from "react";

function Student({ student, onClick }) {
  useEffect(() => {
    console.log("Rendering", Student.name);
  });

  return (
    <div
      className="border border-success m-3 p-3"
      onClick={() => onClick(student)}
    >
      <p>
        {student.firstName} - {student.lastName}
      </p>
    </div>
  );
}

// export default Student;
export default React.memo(Student);
