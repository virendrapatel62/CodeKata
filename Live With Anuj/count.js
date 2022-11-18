const array = ["a", "a", "a", "b", "c", "d", "d"];
const map = {};

array.forEach((char) => {
  const count = map[char];
  map[char] = count ? count + 1 : 1;
});

console.log(map);
