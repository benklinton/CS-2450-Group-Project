/**
 * Load a word from a specific location in memory into the accumulator.
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const LOAD = (vm, v) => {
  // Load a word from a specific location in memory into the accumulator.
  vm.r.acc = vm.memory.getLoc(v);
  if (vm.r.isDebugging || vm.r.isTesting) {
    console.log("LOAD");
    vm.c.log("LOAD");
  }
};
