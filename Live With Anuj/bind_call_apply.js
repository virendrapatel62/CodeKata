function sayHello(age, from) {
  console.log(
    `Hello ${this.name} and your age is ${age} , and you are from ${from}`
  );
}

const student = {
  name: "virendra",
};

sayHello.call(student, 24, "Jabalpur");
// sayHello.bind(student)();
sayHello.apply(student, [24, "jabalpur"]);
