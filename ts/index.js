console.log("...");

function sum(a, b, c) {
  console.log({ a, b, c });
  return a + b + c;
}

const create = (sum) => {
  return function curried(...args) {
    if (args.length >= sum.length) {
      return sum.apply(this, args);
    } else {
      return function (...args2) {
        const newFn = curried.apply(this, args.concat(args2));
        return newFn;
      };
    }
  };
};

console.log(create(sum)(10)(20)(20));

function recusion(sum) {
  function curry(...args) {
    if (sum.length <= args.length) {
      return sum(...args);
    } else {
      return function (...args2) {
        return curry(...args, ...args2);
      };
    }
  }

  return curry;
}

console.log(recusion(sum)(10, 20)(30));
