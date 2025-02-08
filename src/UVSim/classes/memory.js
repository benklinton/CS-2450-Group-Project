const fs = require("fs");
const path = require("path");

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
    const absolutePath = path.resolve(process.cwd(), fileName);

    const data = fs.readFileSync(absolutePath, "utf8");
    const lines = data.split("\n");
    // check if the file is empty 
    if (lines[0] === "") {
      throw new Error("Empty file");
    }
    // check if the file has more than 100 lines
    if (lines.length > 100) {
      throw new Error("Program is too large");
    }
    // load the program into memory
    for (let i = 0; i < lines.length; i++) {
      this.words[i] = parseInt(lines[i]);
    }


  }

  /**
   * Loads a location (or word) from the memory array at the specified location
   * @param {The location at which the word or line is loaded from, [00-99]} loc
   * @returns
   */
  getLoc(loc = 0) {
    if (loc < 0 || loc > 99) {
      throw new Error("Accessing location out of bounds, loc: " + loc);
    }
    return this.words[loc];
  }

  /**
   * Overwrites a location in memory with a new value
   * @param {The location at which the line in memory will be overwritten} loc
   * @param {The value with which the line will be written} value
   */
  setLoc(loc = 0, value = 0) {
    if (loc < 0 || loc > 99) {
      throw new Error("Setting location out of bounds, loc: " + loc);
    }
    if (value > 9999 || value < -9999) {
      throw new Error("Setting value out of bounds, value: " + value);
    }
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
