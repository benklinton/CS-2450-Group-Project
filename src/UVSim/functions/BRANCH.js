/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const BRANCH = (vm, v) => {
  console.log("BRANCH");
  vm.r.pc = v;
};

module.exports = { BRANCH };
