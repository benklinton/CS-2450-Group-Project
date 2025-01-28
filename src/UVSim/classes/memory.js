class Memory {
  constructor() {
    this.words = Array.from({ length: 100 }, () => 0);
  }

  loadProgram(fileName) {
    const fs = require("fs");
    const path = require("path");
    const absolutePath = path.resolve(process.cwd(), fileName);

    try {
      // Read file synchronously
      const data = fs.readFileSync(absolutePath, "utf8");
      const lines = data.split("\n");

      // Load program into memory
      lines.forEach((line, index) => {
        if (index < 100) {
          //uses parseInt to convert the string to an integer could use strings instead and change the processor
          const value = parseInt(line.trim());
          if (!isNaN(value)) {
            this.words[index] = value;
          }
        }
      });
    } catch (err) {
      console.error(err);
      return;
    }
  }

  /**
   * Loads a line (or word) from the memory array at the specified index
   * @param {The index at which the word or line is loaded from, [00-99]} index
   * @returns
   */
  getLine(index = 0) {
    return this.words[index];
  }
  /**
   * Get the entire memory array
   * @returns The entire memory array
   */
  getAllLines() {
    return this.words;
  }

  /**
   * Overwrites a line in memory with a new value
   * @param {The index at which the line in memory will be overwritten} index
   * @param {The value with which the line will be written} value
   */
  setLine(index = 0, value = 0) {
    this.words[index] = value;
  }

  /**
   * Clears the whole memory array
   */
  clear() {
    this.words = Array.from({ length: 100 }, () => 0);
  }
}

module.exports = { Memory };
