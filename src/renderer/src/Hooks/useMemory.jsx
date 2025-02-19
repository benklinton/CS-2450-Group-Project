import { useEffect } from "react";

export const defaultMemory = {
  words: Array.from({ length: 100 }, () => 0),
  loadProgram: () => {},
  getLoc: () => {},
  setLoc: () => {},
  getMemory: () => {},
  clear: () => {},
};

export const useMemory = (vm, rerender) => {
  const setWord = (index, value) => {
    vm.memory.words[index] = value;
  };

  /**
   * Loads a program into memory from a file
   * @param {string} fileName
   * the path to a file to be loaded into memory
   */
  const loadProgram = (data) => {
    const lines = data.split("\n");
    // Load program into memory
    lines.forEach((line, index) => {
      if (index < 100) {
        //uses parseInt to convert the string to an integer could use strings instead and change the processor
        const value = parseInt(line.trim());
        if (!isNaN(value)) {
          setWord(index, value);
        }
      }
    });
  };

  /**
   * Loads a location (or word) from the memory array at the specified location
   * @param {int} loc
   * The location at which the word or line is loaded from, [00-99]
   * @returns {string}
   */
  const getLoc = (loc = 0) => {
    if (loc < 0 || loc > 99) {
      throw new Error("Out Of Bounds: " + loc);
    }
    return vm.memory.words[loc];
  };

  /**
   * Overwrites a location in memory with a new value
   * @param {int} loc
   * The location at which the line in memory will be overwritten
   * @param {int} value
   * The value with which the line will be written
   */
  const setLoc = (loc = 0, value = 0) => {
    if (loc < 0 || loc > 99) {
      throw new Error("Out of Bounds Location: " + loc);
    }
    if (value > 9999 || value < -9999) {
      throw new Error("Out of Bounds Value: " + value);
    }
    setWord(loc, value);
  };

  const getMemory = () => {
    return vm.memory.words;
  };

  /**
   * Clears the whole memory
   */
  const clear = () => {
    vm.memory.words = Array.from({ length: 100 }, () => 0);
    rerender();
  };

  useEffect(() => {
    vm.memory = {
      words: Array.from({ length: 100 }, () => 0),
      loadProgram,
      getLoc,
      setLoc,
      getMemory,
      clear,
    };
  }, []);
};
