/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const BRANCHZERO = (vm, v) => {
  // Branch to a specific location in memory if the accumulator is zero.
  if(vm.r.acc === 0) {
    vm.r.pc = v;
  }
  console.log("BRANCHZERO");
};

module.exports = { BRANCHZERO };
