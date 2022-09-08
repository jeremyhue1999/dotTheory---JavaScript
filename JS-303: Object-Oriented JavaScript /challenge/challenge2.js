//writes an empty if statement that checks if it's the players turn. Use dot notation.
//returns a string equal to the value of the name property followed by the string " is now playing!". Uses bracket notation.
const player1 = {
  name: "Ashley",
  color: "purple",
  isTurn: true,
  play: function () {
    // write code here.
    if (this.isTurn) {
      return `${this["name"]} is now playing`;
    }
  },
};
