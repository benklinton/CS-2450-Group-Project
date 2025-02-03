/**
 * Load a word from a specific location in memory into the accumulator.
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const LOAD = (vm, v) => {
  console.log("LOAD");

  vm.r.acc = vm.memory.getLoc(v);
};

module.exports = { LOAD };
