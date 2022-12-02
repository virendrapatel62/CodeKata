const redux = require("redux");

function reducer(state, action) {
  console.log({ state, action });
  const { type, payload } = action;

  if (type === "INSERT") {
    const newState = { ...state };
    const names = [...newState.names];
    names.push(payload);
    newState.names = names;
    return newState;
  }
  return state;
}
const store = redux.createStore(reducer, {
  names: [],
});
store.subscribe(() => {
  console.log("state update", store.getState());
});

store.dispatch({
  type: "INSERT",
  payload: "Virendra",
});

store.dispatch({
  type: "INSERT",
  payload: "Harsh",
});
