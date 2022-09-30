/**
 * Returns a random number between two numbers
 * @param {number} lower - The lowest number value
 * @param {number} upper - The highes number value .
 * @return {number} The random number value
 */

const getRandom = (upper, lower) => {
  if (isNaN(upper) || isNaN(lower)) {
    throw Error("Both arguments must be a number");
  } else if (upper < lower) {
    throw Error("The first number should be higher");
  }

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getHigh = prompt("Please enter the maximum value");
const getLow = prompt("Please enter the minimum value ");

const output = `<h1>Your Random Number is:</h1><p>${getRandom(
  parseInt(getHigh),
  parseInt(getLow)
)}</p>`;

document.querySelector("main").innerHTML = output;
