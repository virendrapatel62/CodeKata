import React from "react";

function StudentDashboard() {
  return <h1>Hello 👋 Student</h1>;
}

function TeacherDashboard() {
  return <h1>Hello 👋 Teacher</h1>;
}

function EmployeeDashboard() {
  return <h1>Hello 👋 Employee</h1>;
}

function Dashboard() {
  const loggedInUser = "employee";

  const component = {
    student: <StudentDashboard />,
    teacher: <TeacherDashboard />,
    employee: <EmployeeDashboard />,
  };

  //   if (loggedInUser === "student") {
  //     component = <StudentDashboard />;
  //   }
  return <div>{component[loggedInUser]}</div>;

  //   return (
  //     <div>
  //       {loggedInUser == "student" ? <StudentDashboard /> : <TeacherDashboard />}
  //     </div>
  //   );
}

export { Dashboard };
