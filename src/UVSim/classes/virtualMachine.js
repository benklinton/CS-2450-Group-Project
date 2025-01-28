const { Register } = require("./register");

class VirtualMachine {
  constructor() {
    this.register = new Register();
    this.instructionCounter = 0;
    this.instructionRegister = 0;
    this.operationCode = 0;
    this.operand = 0;
  }
}

module.exports = { VirtualMachine };
