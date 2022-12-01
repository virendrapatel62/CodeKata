const address = {
  city: "JABLP",
  state: "MP",
};

const student = {
  name: "virendra",
  address: address,
  age: 24,
};

const studentCopy1 = Object.assign({}, student);

const studentCopy2 = {
  ...student,
};

console.log(student.address == studentCopy1.address);
console.log(student.address == studentCopy2.address);
