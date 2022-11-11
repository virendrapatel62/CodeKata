import fs from "fs/promises";

import path from "path";

export const createTodo = async (todo) => {
  const todos = JSON.parse(
    await fs.readFile(path.join(process.cwd(), "data.json"))
  );
  todos.push(todo);
  await fs.writeFile(
    path.join(process.cwd(), "data.json"),
    JSON.stringify(todos)
  );
};

export const getAllTodos = async () => {
  const todos = JSON.parse(
    await fs.readFile(path.join(process.cwd(), "data.json"))
  );

  return todos;
};
