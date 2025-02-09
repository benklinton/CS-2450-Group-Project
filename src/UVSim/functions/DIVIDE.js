/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const DIVIDE = (vm, v) => {
  console.log("DIVIDE");
  // Divide the word in the accumulator by a word from a specific location in memory (leave the result in the accumulator).
  vm.r.acc /= vm.memory.getLoc(v);
};

module.exports = { DIVIDE };
