import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
export function useFetchUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then(setUsers);
  }, []);

  return users;
}
