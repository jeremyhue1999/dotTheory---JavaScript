// 1.  Creates an empty getter method called level().
/* 2. Returns the level of a student, based on how many credits (this.credits) they have.
If student has more than 90 credits, they are a 'Senior'.
If the student has 90 or fewer credits, but more than 60 (>= 61), they are a 'Junior'.
If the student has 60 or fewer credits, but more than 30 (>= 31), they are a 'Sophomore'.
If the student has 30 or fewer credits, they are a 'Freshman'.
*/

class Student {
  constructor(gpa, credits) {
    this.gpa = gpa;
    this.credits = credits;
  }

  get level() {
    if (this.credits > 90) {
      return "Senior";
    } else if (this.credits <= 90 && this.credits >= 61) {
      return "Junior";
    } else if (this.credits <= 60 && this.credits >= 31) {
      return "Sophomore";
    } else if (this.credits <= 30) {
      return "Freshman";
    }
  }

  stringGPA() {
    return this.gpa.toString();
  }
}

const student = new Student(3.9, 59);
console.log(student.level);
