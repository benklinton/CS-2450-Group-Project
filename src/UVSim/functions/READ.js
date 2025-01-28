/**
 *
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const READ = async (vm, v) => {
  //check out process.stdin
  //or easier yet is npm package readline-sync
  console.log("READ");
};

module.exports = { READ };
