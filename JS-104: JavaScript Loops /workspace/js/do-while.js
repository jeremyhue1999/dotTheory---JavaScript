const getRandomNumber = (upper) => {
  return Math.floor(Math.random() * upper) + 1;
};

let counter = 0;

do {
  console.log(getRandomNumber(19));
  counter++;
} while (counter < 10);
