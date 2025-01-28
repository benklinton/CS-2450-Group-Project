class Register {
  constructor() {
    this.words = Array.from({ length: 100 }, () => 0);
  }

  /**
   * Gets a line (or word) from the memory array at the specified index
   * @param {The index at which the word or line to be recieved is} index
   * @returns
   */
  getLine(index = 0) {
    return this.words[index];
  }
  /**
   * Get the entire memory array
   * @returns The entire memory array
   */
  getWords() {
    return this.words;
  }

  /**
   * Overwrites a line in memory with a new value
   * @param {The index at which the line in memory will be overwritten} index
   * @param {The value with which the line will be written} value
   */
  setWord(index = 0, value = 0) {
    this.words[index] = value;
  }

  /**
   * Clears the whole memory array
   */
  clear() {
    this.words = Array.from({ length: 100 }, () => 0);
  }
}

module.exports = { Register };
