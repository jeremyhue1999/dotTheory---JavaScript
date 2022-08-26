// creates a do while loop for password verification .

// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"

const password = "sesame";
let secret;
do {
  secret = prompt("What is the secret password?");
} while (secret !== password);
{
  // This should run after the loop is done executing
  alert("You know the secret password. Welcome!");
}
