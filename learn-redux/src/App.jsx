import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Students } from "./components/Students";
import axios from "axios";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { useFetchTodos } from "./hooks/useFetchTodos";
import Todos from "./components/Todos";

function App() {
  const users = useFetchUsers();
  const todos = useFetchTodos();
  const dispatch = useDispatch();
  const appData = useSelector((state) => state);

  console.log({ appData });
  useEffect(() => {
    dispatch({
      type: "SAVE_USERS",
      payload: {
        users,
      },
    });
  }, [users]);

  useEffect(() => {
    dispatch({
      type: "SAVE_TODOS",
      payload: {
        todos,
      },
    });
  }, [todos]);
  return (
    <div className="App">
      {/* <Student></Student>
      <StudentForm></StudentForm> */}

      <div className="row">
        <div className="col">
          <Todos></Todos>
        </div>
        <div className="col">
          <Students></Students>
        </div>
      </div>
    </div>
  );
}

export default App;
