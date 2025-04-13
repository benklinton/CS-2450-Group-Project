/**
 *
 * @param {VirtualMachine} vm
 * current virtual machine - has all the data like registers memory and such
 * @param {int} v
 * value - the value passed by the instruction otherwise known as operand
 */
export const READ = (vm, v, inputRef) => {
  if (vm.r.isDebugging || vm.r.isTesting) {
    console.log("READ");
    vm.c.log("READ");
  }
  vm.c.log("waiting for input");

  // const input = parseFloat(vm.reader.question("").trim());
  //This puts the input in memory if 1. the input is a number
  //2. the input isnt a number just because it was trimmed
  //3. the input is not a decimal 4. the input falls in range (-9999 to +9999)
  if (!isNaN(v) && v % 1 == 0 && -9999 <= v && v <= 9999) {
    inputRef?.current?.focus?.();
    vm?.inputRef?.current?.focus?.();
    vm.inputRef.current.placeholder = "Waiting for input...";
    vm.r.isWaitingForInput = true;
    vm.r.r1 = v;
    // vm.memory.setLoc(v, input);
  } else {
    throw Error("Invalid Opcode");
  }
};
