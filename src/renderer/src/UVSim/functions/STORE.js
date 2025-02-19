/**
 * Store a word from the accumulator into a specific location in memory.
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const STORE = (vm, v) => {
  // Store a word from the accumulator into a specific location in memory.
  vm.memory.setLoc(v, vm.r.acc);
  if (vm.r.isDebugging || vm.r.isTesting) {
    console.log("STORE");
    vm.c.log("STORE");
  }
};
