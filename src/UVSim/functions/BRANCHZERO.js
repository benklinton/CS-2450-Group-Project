/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const BRANCHZERO = (vm, v) => {
  // Branch to a specific location in memory if the accumulator is zero.
  if(vm.r.acc === 0) {
    vm.r.pc = v;
  }
  console.log("BRANCHZERO");
  if (vm.r.acc == 0) {
    vm.r.pc = v;
  }
};

module.exports = { BRANCHZERO };
