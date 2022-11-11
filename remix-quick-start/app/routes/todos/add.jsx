// todos/add
import { createTodo } from "~/data";
import React from "react";

export default function NewTodo() {
  return (
    <div>
      <h1>Create New Todo Here</h1>
      <hr />

      <div>
        <form action="" method="post">
          <input autoFocus type="text" name="title" />
          <br />
          <br />
          <input type="submit" value={"Create Todo"} />
        </form>
      </div>
    </div>
  );
}

export async function action(data) {
  const formData = await data.request.formData();

  const todo = Object.fromEntries(formData);

  await createTodo({
    title: todo.title,
    id: new Date().toISOString(),
  });
  return {
    message: "Todo Created...",
  };
}
