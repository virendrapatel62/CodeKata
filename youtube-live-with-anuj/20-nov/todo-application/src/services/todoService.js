const TODOS_KEY = "TODOS";

export const saveTodos = (todos = []) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const getAllTodos = () => {
  const todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  return todos;
};
