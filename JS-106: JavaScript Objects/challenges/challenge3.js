// Creates a for in loop to log each property of the object
const composer = {
  name: "Edward Ellington",
  nickname: "Duke",
  genres: ["jazz", "swing"],
  instrument: "piano",
};

for (let prop in composer) {
  console.log(`${prop}: ${composer[prop]}`);
}
