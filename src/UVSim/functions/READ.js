/**
 *
 * @param {VirtualMachine} vm
 * @param {number} v
 */
const READ = (vm, v) => {
  console.log("READ");
  const input = vm.reader.question("").trim();
  //This puts the input in memory if 1. the input is a number 
  //2. the input isnt a number just because it was trimmed 
  //3. the input is not a decimal 4. the input falls in range (-9999 to +9999)
  if (!isNaN(v) && v % 1 == 0 && -9999 <= v && v <= 9999) {
    vm.memory.setLoc(v,input);
  } else {
    throw Error("Invalid Opcode")
  }
};

module.exports = { READ };
