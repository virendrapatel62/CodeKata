import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/todos";
export function useFetchTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then(setTodos);
  }, []);

  return todos;
}
