import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import Todos from "./components/Todos";
import { useFetch } from "./hooks/useFetch";
import { MyAppModal } from "./components/Modal";
import { useState } from "react";
import ObjectToTable from "./components/ObjectToTable";
function App() {
  const userResponse = useFetch("https://dummyjson.com/users", { users: [] });
  const todoResponse = useFetch("https://dummyjson.com/todos", { todos: [] });

  const [selectedUser, setSelectedUser] = useState();
  const [selectedTodo, setSelectedTodo] = useState();
  const [modalTitle, setModelTitle] = useState("");
  const [showModal, setShowModal] = useState({
    userModal: false,
    todoModal: false,
  });

  const handleUserClick = (id) => {
    setSelectedUser(userResponse.users.find((u) => u.id == id));
    setShowModal({
      ...showModal,
      userModal: true,
    });
    setModelTitle("User Details");
  };
  const handleTodoClick = (id) => {
    setSelectedTodo(todoResponse.todos.find((t) => t.id == id));
    setShowModal({
      ...showModal,
      todoModal: true,
    });
    setModelTitle("Todo Details");
  };

  const hideModal = () => {
    setShowModal({
      todoModal: false,
      userModal: false,
    });
  };

  console.log(showModal);
  const show = Object.values(showModal).some((v) => v);
  return (
    <div className="container-fluid">
      <div className="mt-4" aria-hidden={true}>
        <div className="row container mx-auto">
          <div className="col">
            <Users users={userResponse.users} onClick={handleUserClick}></Users>
          </div>
          <div className="col">
            <Todos todos={todoResponse.todos} onClick={handleTodoClick}></Todos>
          </div>
        </div>
      </div>

      <MyAppModal show={show} onHide={hideModal} title={modalTitle}>
        {showModal.todoModal && <ObjectToTable data={selectedTodo} />}
        {showModal.userModal && <ObjectToTable data={selectedUser} />}
      </MyAppModal>
    </div>
  );
}

export default App;
