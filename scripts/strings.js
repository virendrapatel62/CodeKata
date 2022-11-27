const username = "virendra";
const paragraph = "my name is " + username;

const backTickString = `My Name is ${username}, This is the Paragraph valu e${paragraph}`;

// console.log(backTickString);
// console.log(paragraph);

console.log(username.charAt(0));
console.log(username.charAt(2));
console.log(username.charAt(3));
console.log(username.charAt(4));

console.log(username.length);
console.log(username.concat(" ", "patel ", "my ", "name ", "is ", "awesome "));

console.log(username.indexOf("r"));
console.log(username.lastIndexOf("r"));

console.clear();

console.log(username.endsWith("dra"));
console.log(username.startsWith("vire"));

console.log(username.split(""));
