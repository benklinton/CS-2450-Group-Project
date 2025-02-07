/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const SUBTRACT = (vm, v) => {
  // Subtract a word from a specific location in memory from the word in the accumulator (leave the result in the accumulator).
  vm.r.acc -= vm.memory.getLoc(v);
  console.log("SUBTRACT");
};

module.exports = { SUBTRACT };
