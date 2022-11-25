class Student {
  constructor(private firstName: string, private lastName: string) {}

  static parse<T>(json: string): T {
    const students = JSON.parse(json);
    if (Array.isArray(students)) {
      students.forEach((student) => {
        Object.setPrototypeOf(student, Student.prototype);
      });

      return students as T;
    }

    return Object.setPrototypeOf(students, Student.prototype) as T;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const students = new Student("virendra", "Patel");

const string = JSON.stringify(students); // locals Storage
const parsed = Student.parse<Student>(string); // read LocalStoage // parsed.__proto__ == Object.prototype

// console.log(Object.getPrototypeOf(parsed) === Object.prototype); // true
// console.log(Object.getPrototypeOf(parsed) === Student.prototype); // false

console.log(students.getFullName());
console.log(parsed.getFullName && parsed.getFullName());
