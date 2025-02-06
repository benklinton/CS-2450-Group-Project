/**
 *
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const BRANCH = (vm, v) => {
  console.log("BRANCH");
  vm.r.pc = v;
};

module.exports = { BRANCH };
