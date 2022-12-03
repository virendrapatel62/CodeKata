import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  initialState: [],
  name: "feelfreetocode/users",
  reducers: {
    saveUsers: (state, { payload }) => {
      return payload;
    },
    deleteUser: (state, { payload }) => {
      const index = payload.index;
      state.splice(index, 1);
    },

    updateName(state, { payload }) {
      //   const index = payload.index;
      //   const name = payload.name;
      const { index, name } = payload;
      if (!name) {
        throw new Error("Name Required..");
      }
      state[index].name = name;

      //   const users = [...state];
      //   const up = { ...users[index] };
      //   up.name = name;
      //   users[index] = up;
      //   return users;
    },
  },
});
