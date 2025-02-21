/**
  This file contains the Register class which is used to store the current state of the program.
  @var pc - program counter - points to the next instruction to be executed
  @var ir - instruction register - holds the current instruction
  @var mar - memory address register - holds the memory address
  @var acc - accumulator (memory buffer register) - holds the data typically used in operations, such as read, write, store, or arithmetic operations
  @var isPaused - if the program is paused somewhere in the loop
  @var isEnd - if the program has ended this should be updated to true
*/
export class Register {
  pc = 0;
  ir = 0;
  mar = 0;
  acc = 0;
  r1 = 0;

  isEnd = false;
  isWaitingForInput = false;
  isRunning = false;
  isDebugging = false;
  isTesting = false;

  constructor(rerender) {
    this.pc = 0;
    this.ir = 0;
    this.mar = 0;
    this.acc = 0;
    this.r1 = 0;

    this.isEnd = false;
    this.isWaitingForInput = false;
    this.isRunning = false;
    this.isDebugging = false;
    this.isTesting = false;

    this.rerender = rerender;
  }

  reset() {
    this.pc = 0;
    this.ir = 0;
    this.mar = 0;
    this.acc = 0;
    this.r1 = 0;

    this.isEnd = false;
    this.isWaitingForInput = false;
    this.isRunning = false;
    this.isDebugging = false;
    this.isTesting = false;

    this.rerender();
  }
}
