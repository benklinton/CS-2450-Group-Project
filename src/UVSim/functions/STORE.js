/**
 * Store a word from the accumulator into a specific location in memory.
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const STORE = (vm, v) => {
  console.log("STORE");

  vm.memory.setLoc(v, vm.r.acc)
};

module.exports = { STORE };
