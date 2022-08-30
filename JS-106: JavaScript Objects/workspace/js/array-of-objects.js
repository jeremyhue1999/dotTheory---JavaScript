//1. Create a multidimensional array to hold quiz questions and answer
const questAns = [
  {
    question: "What is the color of the sun?",
    answer: "yellow",
  },
  {
    question: "What is the color of the sea?",
    answer: "blue",
  },
  {
    question: "What is the shape of the earth?",
    answer: "round",
  },
  {
    question: "What is the color of the grass?",
    answer: "green",
  },
  {
    question: "What is my name?",
    answer: "jeremy",
  },
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
    let question = array[i].question;
    let answer = prompt(question);
    if (array[i].answer === answer.toLowerCase()) {
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
