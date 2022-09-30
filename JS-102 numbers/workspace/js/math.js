const secsPerMin = 60;
const minPerHour = 60;
const hourPerDay = 24;
const daysPerWeek = 7;
const weekPerYear = 52;

const secondsPerDay = hourPerDay * minPerHour * secsPerMin;
console.log(`There are ${secondsPerDay} seconds in a day`);

const yearsAlive = 22;

const secondsAlive =
  yearsAlive * weekPerYear * daysPerWeek * hourPerDay * minPerHour * secsPerMin;

console.log(`I've been alive for more than ${secondsAlive} seconds`);
