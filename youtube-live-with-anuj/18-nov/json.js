const person = {
  name: "virendra",
  age: 24,
  friendName: "Anuj",
};
const personToJson = JSON.stringify(person);
console.log(personToJson);
console.log(JSON.parse(personToJson));
