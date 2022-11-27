//  block= { . /..... }

function muliply(x, y) {
  return x * y;
}

function sum(x, y) {
  return x + y;
}

const sumAnswer = sum(12, 23);
const multiplyAnswer = muliply(sumAnswer, 2);

console.log(sumAnswer, multiplyAnswer);

// const sayHello = (username) => {
//   return `Hello ${username}`;
// };

const sayHello = (username) => `Hello ${username}`;

const greeting = sayHello("Virendra");

console.log({ greeting });

// TODO : PENDING THIS
function task() {
  console.log({ function: this });
  //   console.log(arguments);

  const innerArrow = (x, y, z) => {
    console.log({ arrow: this });
  };

  const outerFunction = function (x, y, z) {
    console.log({ arrow: this });
  };

  innerArrow();
  outerFunction();
}

const arrowTask = (x, y, z) => {
  console.log({ arrow: this });
  //   console.log(x, y, z, arguments);
};

task(2, 3, 5);
arrowTask(4, 6, 7);
