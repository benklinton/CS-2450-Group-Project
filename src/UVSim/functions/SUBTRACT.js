/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const SUBTRACT = (vm, v) => {
  // Subtract a word from a specific location in memory from the word in the accumulator (leave the result in the accumulator).
  const value = vm.memory.getLoc(v);
  vm.r.acc -= value;
};

module.exports = { SUBTRACT };
