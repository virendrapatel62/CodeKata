import { DELETE_USERS, NEW_USER } from "../reducers/userReducer";

export const deleteUserAction = (index) => {
  return {
    type: DELETE_USERS,
    payload: {
      index,
    },
  };
};

export const newUserAction = (name) => {
  return {
    type: NEW_USER,
    payload: {
      name,
    },
  };
};
