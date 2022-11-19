// const array = [
//   ["virendra", 24],
//   ["anuj", 24],
// ];

// console.log(
//   array.reduce((acc, item) => {
//     acc[item[0]] = item[1];
//     return acc;
//   }, {})
// );

// console.log(array.reduce((acc, [name, age]) => ({ ...acc, [name]: age }), {}));

// console.log(Object.fromEntries(array));

const array = ["a", "b", "c"];
// const result = [{ char: "a", id: 1 }, { char: "b", id: 2 }, { char: "c" }];

const result = array.reduce((acc, item, index) => {
  // item = 'a', acc = []
  acc.push({
    char: item,
    id: index,
  });
  return acc;
}, []);

console.log(result);
