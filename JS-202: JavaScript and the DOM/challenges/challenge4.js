//Selects the <input> element and assign its value to the variable inputValue.
//sets the text content of the <p> element with the class info to the value stored in inputValue.

const inputValue = document.querySelector("input").value;

document.querySelector("p").textContent = inputValue;
