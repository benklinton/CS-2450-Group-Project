/**
 *Subtract a word from a specific location in memory from the word in the accumulator (leave the result in the accumulator).
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const SUBTRACT = (vm, v) => {
  // Subtract a word from a specific location in memory from the word in the accumulator (leave the result in the accumulator).
  if (vm.r.isDebugging || vm.r.isTesting) {
    console.log("SUBTRACT");
    vm.c.log("SUBTRACT");
  }
  vm.r.acc -= vm.memory.getLoc(v);
};
