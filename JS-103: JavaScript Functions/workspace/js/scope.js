let person = "Lee";

function greeting() {
  person = "Meg";
  alert(`Hi, ${person}!`);
}
function greeting2() {
  let person = "Robert";
  alert(`Hi, ${person}!`);
}

greeting();
alert(`Hi, ${person}`);
greeting2();
