class Memory {
  constructor() {
    this.words = Array.from({ length: 100 }, () => 0);
  }

  /**
   * Loads a program into memory from a file
   * @param {the path to a file to be loaded into memory} fileName
   * @returns
   */
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
   * Loads a location (or word) from the memory array at the specified location
   * @param {The location at which the word or line is loaded from, [00-99]} loc
   * @returns
   */
  getLoc(loc = 0) {
    if (loc < 0 || loc > 99) {
      throw new Error("Index out of bounds");
    }
    return this.words[loc];
  }

  /**
   * Overwrites a location in memory with a new value
   * @param {The location at which the line in memory will be overwritten} loc
   * @param {The value with which the line will be written} value
   */
  setLoc(loc = 0, value = 0) {
    this.words[loc] = value;
  }

  /**
   * Clears the whole memory
   */
  clear() {
    this.words = Array.from({ length: 100 }, () => 0);
  }
}

module.exports = { Memory };
