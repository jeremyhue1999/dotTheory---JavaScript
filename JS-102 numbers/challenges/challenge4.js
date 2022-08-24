// collect input from a user
const inputHigh = prompt("Please Provide the highes number");
const inputLow = prompt("Please enter the lowet number");
// convert the input number

const convertedInputHigh = parseInt(inputHigh);
const convertedInputLow = parseInt(inputLow);

if (convertedInputLow < convertedInputHigh) {
  // Use Math.random() and the user's number to generate a random number.
  const random =
    Math.floor(Math.random() * (convertedInputHigh - convertedInputLow + 1)) +
    convertedInputLow;
  //Create a message displaying the random number

  console.log(
    `${random} is a random number between ${convertedInputLow} and ${convertedInputHigh} `
  );
} else if (convertedInputHigh < convertedInputLow) {
  console.log(
    `Please make sure that the first number should be higher. Try again`
  );
} else {
  console.log(`please provide the correct inputs`);
}
