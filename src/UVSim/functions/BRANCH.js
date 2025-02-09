/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const BRANCH = (vm, v) => {
  // Branch to a specific location in memory.
  vm.r.pc = v;
  console.log("BRANCH");
  vm.r.pc = v;
};

module.exports = { BRANCH };
