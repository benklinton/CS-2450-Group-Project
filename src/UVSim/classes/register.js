/**
  This file contains the Register class which is used to store the current state of the program.
  @var pc - program counter - points to the next instruction to be executed
  @var ir - instruction register - holds the current instruction
  @var mar - memory address register - holds the memory address
  @var acc - accumulator (memory buffer register) - holds the data typically used in operations, such as read, write, store, or arithmetic operations
  @var isPaused - if the program is paused somewhere in the loop
  @var isEnd - if the program has ended this should be updated to true
*/
class Register {
  pc = 0;
  ir = 0;
  mar = 0;
  acc = 0;

  isPaused = false;
  isEnd = false;

  constructor() {
    this.pc = 0;
    this.ir = 0;
    this.mar = 0;
    this.acc = 0;
  }
}

module.exports = { Register };
