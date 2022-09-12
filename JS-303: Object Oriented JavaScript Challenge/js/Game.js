class Game {
  constructor() {
    this.board = new Board();
    this.ready = false;
    this.player = this.createPlayers();
  }

  /**
   * creates 2 player object
   *
   * @returns {array} an array of two Player object
   */
  createPlayers() {
    let color1 = "e15258";
    let color2 = "e59a13";
    const players = [
      new Player(color1, "player1", 1, true),
      new Player(color2, "player2", 2),
    ];
    return players;
  }

  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  get activePlayer() {
    return this.player.find((player) => player.active);
  }

  handleKeydown(e) {
    if (this.ready) {
      if (e.key === "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === "ArrowRight") {
        this.active.activeToken.moveRight(this.board.column);
      } else if (e.key === "ArrowDown") {
        this.playToken();
      }
    }
  }
  playToken() {
    let spaces = this.board.space;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;

    for (let space of targetColumn) {
      if (space.token === null) {
        targetSpace = space;
      }
    }
    if (targetSpace !== null) {
      game.ready = false;
      activeToken.drop(targetSpace);
    }
  }
}
