const { Memory } = require("./memory");

class VirtualMachine {
  constructor(progam) {
    //registers
    this.pc = 0; //program counter - points to the next instruction to be executed
    this.ir = 0; //instruction register - holds the current instruction
    this.mar = 0; //memory address register - holds the memory address
    this.acc = 0; //accumulator (memory buffer register) - holds the data to be written to memory
    //memory
    this.memory = new Memory();

    //load the program into memory
    this.memory.loadProgram(progam);
    //run the program
    this.run();
  }

  run() {
    let running = true;
    while (running) {
      running = this.tick();
    }
  }

  tick() {
    this.ir = this.memory.getLine(this.pc);
    this.pc++;
    return this.execute();
  }

  execute() {
    //get the opcode and operand by dividing by 100 to get the last two digits we also need to do floor or ceil depending on if it is negative or not
    const opcode =
      this.ir < 0 ? Math.ceil(this.ir / 100) : Math.floor(this.ir / 100);
    const operand = this.ir % 100;

    //check if the opcode and operand are valid if not then we have an invalid instruction and odds are are infinitely looping
    if (Number.isNaN(opcode) || Number.isNaN(operand)) {
      console.log("Invalid instruction");
      return false;
    }

    //debug for opcode and operand
    // console.log(opcode, operand);

    switch (opcode) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 0:
        break;
      case -999:
        //this is the halt
        return false;
      default:
        break;
    }
    return true;
  }
}

module.exports = { VirtualMachine };
