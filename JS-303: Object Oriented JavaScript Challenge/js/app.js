const game = new Game();
const btnStart = document.querySelector("#begin-game");

btnStart.addEventListener("click", function () {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

/**
 * Branches code, depending on what key player presses
 * @param   {Object}    e - Keydown event object
 */

document.addEventListener("keydown", function (event) {
  game.handleKeydown(event);
});
