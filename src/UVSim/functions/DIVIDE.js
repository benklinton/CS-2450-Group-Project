/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const DIVIDE = (vm, v) => {
  // Divide the word in the accumulator by a word from a specific location in memory (leave the result in the accumulator).
  const value = vm.memory.getLoc(v);
  if (value === 0) {
    throw new Error("Cannot divide by zero");
  } else {
    vm.r.acc /= value;
  }
};

module.exports = { DIVIDE };
