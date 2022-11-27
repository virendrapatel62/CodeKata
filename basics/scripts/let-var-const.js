console.log("LET VAR CONST");

const username = "virendra"; // constant
let age = 23; // we can change
var address = "Jabalpur"; // we can change

console.log(username, age, address);

// username = "sandeep"; //!invalid

age = age + 1;

address = "Indore";

console.log(username, age, address);

console.clear();

function myFunc() {
  console.log(c); // valid // why : hoisting
  //   console.log(a); // !invalid
  //   console.log(b); // !invalid
  const a = 90;
  let b = 89;
  var c = 92; // you can accesss this variable before defining

  console.log(varInsideBlock);

  {
    const constInsideBlock = 78;
    let letInsideBlock = 78;
    var varInsideBlock = 78;
  }

  //   console.log(constInsideBlock); // !invalid
  //   console.log(letInsideBlock); // !invalid
  console.log(varInsideBlock); // fuction scope

  //console.log(a, b, c); // valid
}

myFunc();

// console.log(a, b, c); //!invalid
