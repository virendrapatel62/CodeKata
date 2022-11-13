import fs from "fs/promises";
import path from "path";

const readStudentsJson = () => {
  return fs
    .readFile(path.join(process.cwd(), "students.json"))
    .then((response) => JSON.parse(response));
};

export const addStudent = async (student) => {
  student.id = new Date().getTime();

  const data = await readStudentsJson();
  data.students.push(student);

  await fs.writeFile(
    path.join(process.cwd(), "students.json"),
    JSON.stringify(data)
  );

  return student;
};

export const getAllStudent = async () => {
  const data = await readStudentsJson();
  return data.students;
};

export const deleteStudent = async (studentId) => {
  data = await readStudentsJson();
  data.students = data.students.filter((student) => student.id != studentId);

  await fs.writeFile(
    path.join(process.cwd(), "students.json"),
    JSON.stringify(data)
  );
};
