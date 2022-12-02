export const NEW_TODO = "NEW_TODO";

export const SAVE_TODOS = "SAVE_TODOS";

function todoReducer(state = [], { type, payload }) {
  console.log({ type, payload });

  switch (type) {
    case NEW_TODO: {
      const todos = [...state];
      todos.unshift(payload);
      return todos;
    }
    case SAVE_TODOS: {
      return payload.todos;
    }

    default:
      return state;
  }
}

export { todoReducer };
