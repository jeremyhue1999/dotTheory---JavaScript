const order = false;
const breakfastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (order) {
      resolve("your order is complete");
    } else {
      reject(Error("Oh no, your food is not yet ready"));
    }
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then((val) => console.log(val))
  .then.catch((err) => console.log(err));
