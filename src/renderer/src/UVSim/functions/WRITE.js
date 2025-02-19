/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const WRITE = (vm, v) => {
  console.log("WRITE");
  // Write a word from a specific location in memory to the console.
  console.log(vm.memory.getLoc(v));
  vm.c.log("WRITE");
  vm.c.log(vm.memory.getLoc(v));
};
