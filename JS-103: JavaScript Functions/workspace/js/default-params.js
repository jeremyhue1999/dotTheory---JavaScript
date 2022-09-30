const sayGreeting = (greetings = "Good morning", name = "student") =>
  `${greetings}, ${name}`;

const getArea = (width = 2, length = 5, unit = "sq ft") => {
  const area = width * length;
  return `${area} ${unit}`;
};

console.log(getArea(undefined, undefined, "sq m"));
