import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer,
  todos: todoReducer,
});

export { rootReducer };
