/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const HALT = (vm, v) => {
  // Halt the program.
  vm.r.isEnd = true;
  console.log("HALT");
};

module.exports = { HALT };
