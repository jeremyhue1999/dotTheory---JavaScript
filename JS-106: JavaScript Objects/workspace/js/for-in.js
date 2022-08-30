const person = {
  name: "Edward",
  city: "New York",
  age: 37,
  isStudent: true,
  skills: ["JavaScript", "CSS", "HTML"],
};

for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
