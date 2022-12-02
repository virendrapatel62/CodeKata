export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const NEW_USER = "NEW_USER";
export const NEW_TODO = "NEW_TODO";
export const SAVE_USERS = "SAVE_USERS";
export const DELETE_USERS = "DELETE_USERS";
export const SAVE_TODOS = "SAVE_TODOS";

function userReducer(state = [], { type, payload }) {
  console.log({ type, payload });

  switch (type) {
    case NEW_USER: {
      const users = [...state];
      users.unshift({
        ...payload,
        id: users.length + 1,
      });
      return users;
    }

    case SAVE_USERS: {
      return payload.users;
    }

    case DELETE_USERS: {
      const index = payload.index;
      const users = [...state];

      users.splice(index, 1);
      return users;
    }
    default:
      return state;
  }
}

export { userReducer };
