console.log("Hello World..- Vaiabale.js");

var username = "virendra";
let age = 24;
const aadharNumber = 989899395;
const eligibleForVote = false; // true or false

console.log(typeof "virendra"); // string
console.log(typeof 23); // number
console.log(typeof true); // boolean
console.log(typeof 89.9); // number

// let somthing = null ;

// console.log(somthing);

console.log(username, age, aadharNumber, eligibleForVote);
console.clear(); // TODO : Remove this statement to see the output

const viewer1 = "Bhuvnesh";
const viewer2 = "yashwant";
const viewer3 = "akash";

const viewers = ["Virendra", "Bhuvnesh", "Akash", "Yashvant"];
console.log(viewers);

console.log(viewers[0]);
console.log(viewers[1]);
console.log(viewers[2]);
console.log(viewers[3]);
console.log(viewers.length);

console.clear(); // TODO : Remove this statement to see the output

const numbers = [];
numbers.push(12); //[12]
numbers.push(23); // [12 , 23]
numbers.push(134); // [12 , 23, 134]
numbers.push(15); // [12 , 23, 134 , 15]

numbers.pop(); // [12 , 23, 134]

numbers.shift(); // [23, 134]
numbers.unshift(1); // [1, 23, 134]
console.log(numbers.includes(23));
console.log(numbers.concat([12, 23, 434]));
console.log(numbers);
