// changes the value of the 'isTurn' property for player1 to false, using dot notation.
//  changes the value of the 'isTurn' property for player2 to true, using bracket notation.
const player1 = {
  name: "Ashley",
  color: "purple",
  isTurn: true,
  play: function () {
    if (this.isTurn) {
      console.log(`${this.name} is now playing!`);
    }
  },
};

const player2 = {
  name: "Guil",
  color: "red",
  isTurn: false,
  play: function () {
    if (this["isTurn"]) {
      console.log(`${this["name"]} is now playing!`);
    }
  },
};

player1.isTurn = false;
player2["isTurn"] = true;
