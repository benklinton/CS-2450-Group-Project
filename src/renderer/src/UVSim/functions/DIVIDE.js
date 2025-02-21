/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const DIVIDE = (vm, v) => {
  if (vm.r.isDebugging || vm.r.isTesting) {
    console.log("DIVIDE");
    vm.c.log("DIVIDE");
  }
  // Divide the word in the accumulator by a word from a specific location in memory (leave the result in the accumulator).
  vm.r.acc /= vm.memory.getLoc(v);
};
