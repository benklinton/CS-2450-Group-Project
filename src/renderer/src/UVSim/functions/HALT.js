/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const HALT = (vm, v) => {
  // Halt the program.
  vm.r.isEnd = true;
  if (vm.r.isDebugging || vm.r.isTesting) {
    console.log("HALT");
    vm.c.log("HALT");
  }
};
