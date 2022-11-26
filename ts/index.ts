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

const string = JSON.stringify(students);
const parsed = Student.parse<Student>(string);

console.log(students.getFullName());
console.log(parsed.getFullName && parsed.getFullName());
