let correctGuess = false;
const number = 6;
const guess = prompt("Guess a number between 1 and 10");

if (number === +guess) {
  correctGuess = true;
}
if (correctGuess === true) {
  console.log("the condition is true");
} else {
  console.log("the condition is false");
}
