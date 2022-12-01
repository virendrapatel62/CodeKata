const array = [1, 2, 4, 5, 7, 6];

function reducerFunction(state, newData) {
  state = state + newData;
  return state;
}

console.log(array.reduce(reducerFunction, 0));

function studentReducer(student, keyValue) {
  console.log(student, keyValue);
  Object.assign(student, keyValue);
  return student;
}

let student = {};

student = studentReducer(student, { name: "Virendra" });
student = studentReducer(student, { age: 23 });
student = studentReducer(student, { deg: "SE" });

console.log(student);
