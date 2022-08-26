const getRandomNumber = (upper) => {
  return Math.floor(Math.random() * upper) + 1;
};

let counter = 0;

while (counter < 10) {
  console.log(`${counter + 1} the random number is ${getRandomNumber(100)}`);
  counter++;
}
