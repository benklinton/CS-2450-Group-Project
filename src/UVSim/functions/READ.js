/**
 * Read a word from the console into a specific location in memory.
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const READ = (vm, v) => {
  // Read a word from the console into a specific location in memory.

  // Get number from user
  const input = vm.reader.question("Enter a number: ");
  // check if the input is a number
  if (input === "" || input === null || isNaN(input) || input % 1 !== 0) {
    throw new Error("Invalid input");
  } else {
    // set the location in memory to the input
    vm.memory.setLoc(v, parseInt(input));
  }
  console.log("READ");
};

module.exports = { READ };
