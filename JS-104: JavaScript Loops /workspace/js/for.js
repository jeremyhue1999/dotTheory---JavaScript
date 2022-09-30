const getRandomNumber = (upper) => {
  return Math.floor(Math.random() * upper) + 1;
};

for (let i = 0; i < 10; i++) {
  console.log(getRandomNumber(10));
}
