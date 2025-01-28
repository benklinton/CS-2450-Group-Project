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
      case 10:
        break;
      case 11:
        break;
      case 20:
        break;
      case 21:
        break;
      case 30:
        break;
      case 31:
        break;
      case 32:
        break;
      case 33:
        break;
      case 40:
        break;
      case 41:
        break;
      case 41:
        break;
      case 42:
        break;
      case 43:
        break;
      case -999:
        //This appears to be at the end of every program... not sure if it's a sort of stop?
        return false;
      default:
        break;
    }
    return true;
  }
}

module.exports = { VirtualMachine };
