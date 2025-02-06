/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const HALT = (vm, v) => {
  console.log("HALT");
  vm.r.isEnd = true;
};

module.exports = { HALT };
