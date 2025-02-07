/**
 * Read a word from the console into a specific location in memory.
 * @param {current virtual machine - has all the data like registers memory and such} vm
 * @param {value - the value passed by the instruction otherwise known as operand} v
 */
const READ = async (vm, v) => {
  // Read a word from the console into a specific location in memory.
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', data => {
    // As in LC-3, no prompt is given for a keyboard input instruction
    // You just gotta know
    const word = parseFloat(data.trim());

    // Verify the input is a valid word
    if (Number.isInteger(word) && word >= -9999 && word <= 9999) {
      // Write word to memory
      vm.memory.setLoc(v, word);
    }
  });
  console.log("READ");
};

module.exports = { READ };
