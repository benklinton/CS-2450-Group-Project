/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const BRANCH = (vm, v) => {
  // Branch to a specific location in memory.
  vm.r.pc = v;
  console.log("BRANCH");
};

module.exports = { BRANCH };
