import { configureStore, createSlice } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    todos: todoSlice.reducer,
  },
});
