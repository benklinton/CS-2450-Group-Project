/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const ADD = (vm, v) => {
  // Add a word from a specific location in memory to the word in the accumulator (leave the result in the accumulator)
  const value = vm.memory.getLoc(v);
  vm.r.acc += value;
};

module.exports = { ADD };
