class Board {
  constructor() {
    this.row = 6;
    this.column = 7;
    this.space = this.createSpace();
  }

  /**
   * Generates 2D array of spaces
   * @returns {array} An array of space objects
   */
  createSpace() {
    let spaces = [];
    for (let i = 0; i < this.column; i++) {
      const column = [];
      for (let j = 0; i < this.row; j++) {
        const space = new Space(i, j);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
  }
  drawHTMLBoard() {
    for (let column of this.spaces) {
      for (let space of column) {
        space.drawSVGSpace();
      }
    }
  }
}
