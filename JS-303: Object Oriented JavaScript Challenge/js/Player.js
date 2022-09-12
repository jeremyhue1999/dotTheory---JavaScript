class Player {
  constructor(color, name, id, active = false) {
    this.id = id;
    this.color = color;
    this.name = name;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
   * Create token for plater
   * @param {integer} num - Number of token objects to be created
   * @returns tokens
   */
  createTokens(num) {
    let tokens = [];
    for (let i = 0; i < num; i++) {
      let token = new Tokens(i, this);
      tokens.push(token);
    }
    return tokens;
  }
  /**
   * Gets all the tokens that haven't been dropped
   * @return {array} Array of unused tokens
   */
  get unusedTokens() {
    return this.tokens.filter((token) => !token.dropped);

    /**
     * Gets the activity token  by returning the first token in the array of unused tokens.
     * @returns {Object} First token object in the array of unused tokens
     */
  }
  get activeToken() {
    return this.unusedTokens[0];
  }
}
