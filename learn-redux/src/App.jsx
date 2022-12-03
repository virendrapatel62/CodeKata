import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Students } from "./components/Students";
import { useFetchTodos } from "./hooks/useFetchTodos";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { userSlice } from "./store/slices/userSlice";

function App() {
  const users = useFetchUsers();
  const todos = useFetchTodos();
  const dispatch = useDispatch();
  const appData = useSelector((state) => state);

  console.log({ appData });

  useEffect(() => {
    dispatch(userSlice.actions.saveUsers(users));
  }, [users]);
  const onDelete = () => {
    dispatch(userSlice.actions.deleteUser({ index: 3 }));
  };

  return (
    <div className="App">
      <button onClick={onDelete}>Delete User</button>
      <div className="row">
        {/* <div className="col">
          <Todos></Todos>
        </div> */}
        <div className="col">
          <Students></Students>
        </div>
      </div>
    </div>
  );
}

export default App;
