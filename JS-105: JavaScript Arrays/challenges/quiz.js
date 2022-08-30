//1. Create a multidimensional array to hold quiz questions and answer
const questAns = [
  ["What is the color of the sun?", "yellow"],
  ["What is the color of the sea?", "blue"],
  ["What is the shape of the earth?", "round"],
  ["What is the color of the grass?", "green"],
  ["What is my name?", "jeremy"],
];
//2. Store the number of questions answered correctly.
let correctAnswer = 0;
let right = [];
let wrong = [];
/**
 * 3. Use a loop to cycle through each questions
 *  -Present each question to the user
 *  -Compare the user's response to answer in the array
 *  -If the response matches the answer, the number of correctly
 *    answered questionss increment by 1
 */

const correct = (array) => {
  for (let i = 0; i < array.length; i++) {
    let question = array[i][0];
    let answer = prompt(question);
    if (array[i][1] === answer.toLowerCase()) {
      correctAnswer++;
      right.push(question);
    } else if (!answer) {
      wrong.push(question);
    }
  }
  return correctAnswer;
};

const displayItems = (array) => {
  let items = "";
  for (let i = 0; i < array.length; i++) {
    items += `<li>${array[i]}</li>`;
  }
  return items;
};
//4. display the number of correct answer to the user.

document.querySelector("main").innerHTML = `<h1>You got ${correct(questAns)} 
question(s) correct </h1>
<h2>You got this questions right</h2> 
<ol>${displayItems(right)}</ol>
<h2>You got this questions wrong</h2>
<ol>${displayItems(wrong)}</ol>`;
