// Hashing => student : virendra => 1
// Hashing => student : virendra patel => 12
// Hashing => student : Sandeep => 3

// [  1 .   2 .  3 . 4
//    [virendra , virendra patel , Sandeep] , [] , [Sandeep] , []
// ]
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hashCode() {
    return this.name.split("").reduce((code, char) => {
      code += char.charCodeAt(0);
      return code;
    }, 0);
  }

  equals(student) {
    return this.name == student.name;
  }
}
class HashSet {
  constructor() {
    this.INITIAL_SIZE = 10;
    this.buckets = new Array(10).fill(null).map((i) => []);

    console.log(this.buckets);
  }

  toArray() {
    const array = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((student) => {
        array.push(student);
      });
    });

    return array;
  }

  add(item) {
    if (!item.hashCode) {
      throw new Error("Implenent hashCode():number");
    }

    console.log(item.hashCode());
    const bucketIndex = item.hashCode() % this.INITIAL_SIZE;
    const bucket = this.buckets[bucketIndex];

    const exists = bucket.find((current) => current.equals(item));
    console.log(exists);
    if (!exists) {
      bucket.push(item);
    }
  }
}

const set = new HashSet();

set.add(new Student("Sandeep", 25));
set.add(new Student("Sandeep", 24));
set.add(new Student("virendra", 24));
set.add(new Student("irendarv", 24));

console.log(set);

console.log(set.toArray());
