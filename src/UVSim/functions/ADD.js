/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const ADD = (vm, v) => {
  console.log("ADD");
};

module.exports = { ADD };
