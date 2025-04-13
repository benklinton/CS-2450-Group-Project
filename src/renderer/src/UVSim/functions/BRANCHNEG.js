/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const BRANCHNEG = (vm, v) => {
  if (vm.r.isDebugging || vm.r.isTesting) {
    console.log("BRANCHNEG");
    vm.c.log("BRANCHNEG");
  }
  // Branch to a specific location in memory if the accumulator is negative.
  if (vm.r.acc < 0) {
    vm.r.pc = v;
  }
  else {
    vm.r.pc++;
  }
};
