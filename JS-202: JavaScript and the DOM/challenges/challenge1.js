//Declares a variable named button. Assign the variable the <button> element with the ID btn-phrase. Use the method that returns an element matching the specified ID.
//declares a new variable named input. Point the variable to the input element with the ID input-phrase. Use the method that returns an element matching the specified ID.
const input = document.getElementById("input-phrase");
const button = document.getElementById("btn-phrase");
button.addEventListener("click", () => {
  alert(input.value);
});
