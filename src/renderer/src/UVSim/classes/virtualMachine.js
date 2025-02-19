import { functions } from "../functions/functions.js";
import { Memory } from "./memory.js";
import { Register } from "./register.js";

export class VirtualMachine {
  constructor(progam = "") {
    this.r = new Register();
    this.memory = new Memory();

    //load the program into memory if there is one
    if (progam != "") {
      this.memory.loadProgram(progam);
    }
  }

  run() {
    while (!this.r.isEnd) {
      this.tick();
    }
  }

  tick() {
    this.r.ir = this.memory.getLoc(this.r.pc);
    this.r.pc++;
    this.execute();
  }

  getOpcode() {
    const opcode =
      this.r.ir < 0 ? Math.ceil(this.r.ir / 100) : Math.floor(this.r.ir / 100);
    return opcode;
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
      throw new Error("Invalid instruction");
    }

    if (opcode < -99 || opcode > 99) {
      throw new Error("Invalid opcode");
    }

    //DEBUG for opcode and operand
    if (opcode != 0 || operand != 0) {
      console.log(opcode, operand);
    }
    return functions?.[opcode]?.(this, operand);
  }
}
