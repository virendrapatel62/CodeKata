for (let i = 0; i < 5; i = i + 1) {
  console.log("Hello world..", i);
}

for (let j = 0; j < 5; ) {
  console.log("Hello world..", j);
  j = 10;
}

const username = "virendra kumar patel";
let index = 0;

while (username.charAt(index) != "p") {
  console.log("P not found at index", index);
  index++;
}

console.log("p Found at", index);

let k = 0;
do {
  console.log("do while", k);
} while (k != 0); // false

console.log("Staring while");
while (k != 0) {
  console.log("Inside while");
  console.log(k);
}

console.clear();

const numbers = [12, 324, 456, 567, 678, 456, 46, 35, 3];

for (let number of numbers) {
  console.log(number);
}

for (let index in numbers) {
  console.log(index);
}
