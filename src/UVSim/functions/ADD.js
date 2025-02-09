/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const ADD = (vm, v) => {
  console.log("ADD");
  // Add a word from a specific location in memory to the word in the accumulator (leave the result in the accumulator)
  vm.r.acc += vm.memory.getLoc(v);
};

module.exports = { ADD };
