/**
 *
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const HALT = (vm, v) => {
  console.log("HALT");
  vm.r.isEnd = true;
};

module.exports = { HALT };
