/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const MULTIPLY = (vm, v) => {
  console.log("MULTIPLY");
};

module.exports = { MULTIPLY };
