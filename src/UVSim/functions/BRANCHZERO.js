/**
 *
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const BRANCHZERO = (vm, v) => {
  console.log("BRANCHZERO");
  if (vm.r.acc == 0) {
    vm.r.pc = v;
  }
};

module.exports = { BRANCHZERO };
