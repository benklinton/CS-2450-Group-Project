/**
 *
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const WRITE = (vm, v) => {
  console.log("WRITE");

  console.log(vm.memory.getLoc(v));
};

module.exports = { WRITE };
