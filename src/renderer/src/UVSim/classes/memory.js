export class Memory {
  words = Array.from({ length: 250 }, () => 0);
  constructor(rerender) {
    this.words = Array.from({ length: 250 }, () => 0);
    this.rerender = rerender;
  }

  /**
   * Loads a program into memory from a file
   * @param {string} fileName
   * the path to a file to be loaded into memory
   */
  loadProgram(data) {
    this.words = Array.from({ length: 250 }, () => 0);
    const lines = data.split("\n");
    // Load program into memory
    lines.forEach((line, index) => {
      if (index < 250) {
        const trimmed = line.trim();
        if (trimmed === "") return;
        //uses parseInt to convert the string to an integer could use strings instead and change the processor
        const value = parseInt(line.trim());
        if (!isNaN(value) && /^[+-]?\d+$/.test(trimmed)) {
          this.words[index] = value;
        } else {
          throw new Error(
            `Failed to load program: Invalid instruction on line ${index}: ` +
              trimmed
          );
        }
      } else {
        throw new Error("Failed to load program: Program is too large");
      }
    });
  }

  /**
   * Loads a location (or word) from the memory array at the specified location
   * @param {int} loc
   * The location at which the word or line is loaded from, [00-99]
   * @returns {string}
   */
  getLoc(loc = 0) {
    if (loc < 0 || loc > 249) {
      throw new Error("Out Of Bounds: " + loc);
    }
    return this.words[loc];
  }

  /**
   * Overwrites a location in memory with a new value
   * @param {int} loc
   * The location at which the line in memory will be overwritten
   * @param {int} value
   * The value with which the line will be written
   */
  setLoc(loc = 0, value = 0) {
    if (loc < 0 || loc > 249) {
      throw new Error("Out of Bounds Location: " + loc);
    }
    if (value > 999249 || value < -999249) {
      throw new Error("Out of Bounds Value: " + value);
    }
    this.words[loc] = value;
  }

  getMemory() {
    return this.words;
  }

  /**
   * Clears the whole memory
   */
  clear() {
    this.words = Array.from({ length: 250 }, () => 0);
    this.rerender();
  }
}
