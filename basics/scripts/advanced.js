console.log("Advanced JS");

const student = {
  name: "virendra",
  age: 24,
};

const student2 = { ...student };

console.log({ student, student2 });

console.log(student == student2);

const numbers = [23, 3, 556, 56];

const number2 = [...numbers];

console.log(number2 == numbers);
console.log({
  number2,
  numbers,
});

console.clear();

const general = {
  firstName: "Virendra",
  lastName: "Patel",
};
const emp = {
  id: 23,
  general: general,
};

const emp2 = { ...emp };

// {
//   id: 23,
//   general: general,
// }

console.log(emp == emp2);
console.log(emp.general == emp2.general);

emp.general.age = 24;
console.log(emp.general);
console.log(emp2.general);

// ---------------

console.clear();

// TODO : Rest Opeator ( ... )

// ... => rest
// ... => spread

function sum(first, ...numbers) {
  //
  console.log(numbers);
}

sum(12, 24, 34, 45, 456, 34, 34, 3, 46, 456);

// ------------------------------------------

console.clear();

const product = {
  name: 'Mac book pro 16"',
  price: "1.73 L",
  model: "m1 pro",
};

// const productName = product.name;
// const price = product.price;
// const model = product.model;

const { name: productName, price, model } = product;

console.log(productName, price, model);

console.clear();

// const array = [89, 78, 23];

// const maths = array[0];
// const hindi = array[1];
// const english = array[2];

// const [maths, hindi, english] = array;

// console.log({
//   maths,
//   hindi,
//   english,
// });

// const array = [89, 78, 23];
// const [maths, , english] = array;
// console.log({
//   maths,
//   english,
// });

// const array = [89, 78, 23];
// const [, , english] = array;
// console.log({
//   english,
// });

const array = [89, 78, 23, 45, 6, 6, 87, 90, 100]; // { 0: 89 , 1: 78 , 2: 23  }

const {
  1: hindi,
  [~~(array.length / 2)]: middle,
  [array.length - 1]: last,
} = array;

console.log({
  1: "hindi",
  [~~(array.length / 2)]: "middle",
  [array.length - 1]: "last",
});

console.log({
  hindi,
  last,
  middle,
});
