/**
 * Load a word from a specific location in memory into the accumulator.
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const LOAD = (vm, v) => {
  console.log("LOAD");

  vm.r.acc = vm.memory.getLoc(v);
};

module.exports = { LOAD };
