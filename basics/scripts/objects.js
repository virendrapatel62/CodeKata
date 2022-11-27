const student = {
  name: "virendra",
  lastName: "patel",
  age: 24,
  phones: [232423423, 23423423],
  adderss: {
    city: "JBP",
  },
  teach: function () {
    console.log("Teaching..", this);
  },
  speak: () => {
    console.log("Speaking..", this);
  },
  code() {
    console.log("Coding...", this);
  },
};

console.log(student.age);
console.log(student.lastName);
console.log(student.name);
student.teach();
student.code();
student.speak();

console.clear();
const emp = new Object({ age: 90 });
emp.name = "virendra";
console.log(emp);
