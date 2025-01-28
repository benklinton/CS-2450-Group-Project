const { functions } = require("../functions/functions");
const { Memory } = require("./memory");
const { Register } = require("./register");

class VirtualMachine {
  constructor(progam) {
    this.r = new Register();
    this.memory = new Memory();

    //load the program into memory
    this.memory.loadProgram(progam);
    //run the program
    this.run();
  }

  run() {
    while (!this.r.isPaused && !this.r.isEnd) {
      this.tick();
    }
  }

  tick() {
    this.r.ir = this.memory.getLoc(this.r.pc);
    this.r.pc++;
    this.execute();
  }

  getOpcode() {
    return this.r.ir < 0
      ? Math.ceil(this.r.ir / 100)
      : Math.floor(this.r.ir / 100);
  }

  getOperand() {
    return this.r.ir % 100;
  }

  execute() {
    //get the opcode and operand by dividing by 100 to get the last two digits we also need to do floor or ceil depending on if it is negative or not
    const opcode = this.getOpcode();
    const operand = this.getOperand();

    //check if the opcode and operand are valid if not then we have an invalid instruction and odds are are infinitely looping
    if (Number.isNaN(opcode) || Number.isNaN(operand)) {
      console.log("Invalid instruction");
      this.r.isEnd = true;
    }

    //DEBUG for opcode and operand
    console.log(opcode, operand);
    return functions?.[opcode]?.(this, operand);
  }
}

module.exports = { VirtualMachine };
