/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const WRITE = (vm, v) => {
  console.log("WRITE");
};

module.exports = { WRITE };
