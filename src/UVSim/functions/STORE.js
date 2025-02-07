/**
 * Store a word from the accumulator into a specific location in memory.
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const STORE = (vm, v) => {
  console.log("STORE");

  vm.memory.setLoc(v, vm.r.acc)
};

module.exports = { STORE };
