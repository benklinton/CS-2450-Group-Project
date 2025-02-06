/**
 *
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const BRANCHNEG = (vm, v) => {
  console.log("BRANCHNEG");
  if (vm.r.acc < 0) {
    vm.r.pc = v;
  }
};

module.exports = { BRANCHNEG };
