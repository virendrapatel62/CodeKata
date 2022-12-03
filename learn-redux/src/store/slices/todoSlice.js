import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  initialState: [],
  name: "todos",
  reducers: {
    saveTodos: (state, { type, payload }) => {
      console.log({ state, payload, type });
    },
  },
});
