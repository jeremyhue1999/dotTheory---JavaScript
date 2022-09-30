console.log("Begin program");
alert("I am Programming!");
console.log("End Program");
//==========================================
let firstName = "Jeremy";
let lastName = "Datud";
let role = "developer";
let msg = firstName + " " + lastName + ": " + role.toUpperCase();
//==========================================
const flavor = "Blueberry";
const type = "Smoothie";
const price = 4.99;

const drink = `${flavor} ${type}: $${price}`;

//=========================================
const a = 10;
const b = 20;
const c = 30;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
}

const isAdmin = true;
const isStudent = false;
let message;

if (isAdmin === true) {
  message = "Welcome admin";
}
//=========================================
// const isAdmin = false;
// const isStudent = true;
// let message;

if (isAdmin) {
  message = "Welcome admin";
} else if (isStudent) {
  message = "Welcome student";
}
//=========================================
// const isAdmin = false;
// const isStudent = false;
// let message;

if (isAdmin) {
  message = "Welcome admin";
} else if (isStudent) {
  message = "Welcome student";
} else {
  message = "Access denied";
}
//=========================================
const money = 9;
const today = "Friday";

if (money > 10 && today === "Friday") {
  alert("Time to go to the theater.");
} else if (money >= 50 && today === "Friday") {
  alert("Time for a movie and dinner.");
} else if (money < 10 && today === "Friday") {
  alert("It's Friday, but I don't have enough money to go out.");
} else {
  alert("This isn't Friday. I need to stay home.");
}
