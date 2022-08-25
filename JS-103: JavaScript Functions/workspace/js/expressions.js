const getRandomNumber = function (upper) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

console.log(getRandomNumber(6));
