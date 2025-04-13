import { functions } from "../functions/functions.js";
import { VMConsole } from "./console.js";
import { Memory } from "./memory.js";
import { Register } from "./register.js";

export class VirtualMachine {
  constructor(rerender, inputRef) {
    this.r = new Register(rerender);
    this.memory = new Memory(rerender);
    this.c = new VMConsole(rerender);
    this.rerender = rerender;
    this.inputRef = inputRef;
  }

  loadProgram(program) {
    try {
      this.memory.loadProgram(program);
      this.r.reset();
    } catch (e) {
      this.c.log(e.message, "error");
    }
    // this.c.log("Program loaded");
    this.rerender();
  }

  run() {
    this.r.isRunning = true;
    while (!this.r.isEnd) {
      this.tick();
      this.rerender();
      if (this.r.isWaitingForInput) {
        break;
      }
    }
  }

  tick() {
    if (this.r.isWaitingForInput || this.r.isEnd) {
      if (this.r.isWaitingForInput) this.inputRef?.current?.focus();
      return;
    }
    try {
      this.r.ir = this.memory.getLoc(this.r.pc);
      this.r.pc++;
      this.execute();
    } catch (e) {
      console.log(e);
      this.c.log(e.message, "error");
      this.r.isEnd = true;
    }
    this.r.acc %= 100000;
    this.rerender();
  }

  sendInput(input) {
    if (!this.r.isWaitingForInput) return;

    try {
      const i = parseFloat(input.trim());
      if (!isNaN(i)) {
        this.memory.setLoc(this.r.r1, i);
        this.r.isWaitingForInput = false;
        this.inputRef.current.placeholder = "Console Input";
        if (this.r.isRunning) {
          this.run();
        }
      } else {
        throw new Error("Input must be number");
      }
    } catch (e) {
      this.r.isEnd = true;
      this.c.log(e.message, "error");
    }
  }

  getOpcode() {
    const opcode =
      this.r.ir < 0 ? Math.ceil(this.r.ir / 1000) : Math.floor(this.r.ir / 1000);
    return opcode;
  }

  getOperand() {
    return this.r.ir % 1000;
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
    if (
      (opcode !== 0 || operand !== 0) &&
      (this.r.isDebugging || this.r.isTesting)
    ) {
      this.c.log(`${opcode} ${operand}`, "log");
      console.log(opcode, operand);
    }
    return functions?.[opcode]?.(this, operand);
  }
}
