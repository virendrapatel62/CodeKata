import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

export const marvelSlice = createSlice({
  initialState: {},
  name: "marvel-slice",
  reducers: {
    storeMarvels: (state, action) => {
      return action.payload;
    },
  },
});
