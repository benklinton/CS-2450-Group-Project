/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
const BRANCHNEG = (vm, v) => {
  console.log("BRANCHNEG");
  if (vm.r.acc < 0) {
    vm.r.pc = v;
  }
};

module.exports = { BRANCHNEG };
