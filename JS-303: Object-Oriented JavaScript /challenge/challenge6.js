// 1. Creates an empty method called stringGPA() and add it to the Student class
// 2. Converts the value of the gpa property to a string and return it.

class Student {
  constructor(gpa) {
    this.gpa = gpa;
  }
  stringGPA() {
    return this.gpa.toString();
  }
}

const student = new Student(3.9);
