const address = {
  city: "JABLP",
  state: "MP",
};

const student = {
  name: "virendra",
  address: address,
  age: 24,
};

// const studentCopy1 = {
//   ...student,
//   address: {
//     ...student.address,
//   },
// };

// const studentCopy1 = JSON.parse(JSON.stringify(student));
// https://lodash.com/docs/4.17.15#cloneDeep
// const studentCopy1 = structuredClone(student);
console.log(student.address == studentCopy1.address);
