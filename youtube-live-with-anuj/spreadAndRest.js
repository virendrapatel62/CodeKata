function sum(...numbers) {
  return numbers.reduce((sum, currentNumber) => sum + currentNumber, 0);

  //   let sum = 0;
  //   for (let number of numbers) {
  //     sum += number;
  //   }
  //   return sum;
}

console.log(sum(1, 2, 3, 4, 5));

const student = {
  name: "Supriya",
  age: 23,
};

const person = { ...student };

console.log(person);
