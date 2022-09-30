// 1. Store correct answers
// - when quiz begins, no answers are correct
const answer1 = "yellow";
const answer2 = "blue";
const answer3 = "manila";
const answer4 = "round";
const answer5 = 2;

//2. Store the rank of the player

let rank = "none";

//3. Select the <main> HTML element
const main = document.querySelector("main");
//4. Ask at least 5 questions
//-Store each answer in a variable
//Keep track of the number of correct answers
let question_1 = prompt("What is the color of the sun");
let question_2 = prompt("What is the color of the sea");
let question_3 = prompt("What is the capital of the Philippines");
let question_4 = prompt("What is the shape of the Earth");
let question_5 = prompt("1+1 = ");

let correct_answer = 0;
if (question_1.toLowerCase() === answer1) {
  correct_answer += 1;
}
if (question_2.toLowerCase() === answer2) {
  correct_answer += 1;
}
if (question_3.toLowerCase() === answer3) {
  correct_answer += 1;
}
if (question_4.toLowerCase() === answer4) {
  correct_answer += 1;
}
if (+question_5 === answer5) {
  correct_answer += 1;
}

//5. Rank player based on number of correct anwers
// -5 correct = Gold
// 3-4 correct = Silver
// 1-2 correct = Bronze
if (correct_answer === 5) {
  rank = "GOLD";
} else if (correct_answer >= 3) {
  rank = "SILVER";
} else if (correct_answer >= 1) {
  rank = "BRONZE";
}

//6. Output result to <main> element
const result = `<h1>Congratulations! You got ${correct_answer} out of 5 questions</h1>
            <p> Crown earned: ${rank}</p>`;

main.innerHTML = result;
