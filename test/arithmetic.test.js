const { expect } = require('chai');
const { VirtualMachine } = require('../src/renderer/src/UVSim/classes/virtualMachine');

describe('Arithmetic Operations', () => {
    let vm;

  beforeEach(() => {
    vm = new VirtualMachine(() => {});
  });

  it('should add a word from memory to accumulator', async () => {
    const address = 9;
    const value = 1000;
    const addend = 500;
    const expected = value + addend;
    vm.loadProgram(`+3009\n+4300`);
    vm.memory.setLoc(address, value);
    vm.r.acc = addend;
    vm.run();
    expect(vm.r.acc).to.equal(expected);
  });

  it('should subtract a word from memory to accumulator', async () => {
    const address = 9;
    const value = 1000;
    const subtrahend = 1000;
    const expected = value - subtrahend;
    vm.loadProgram(`+3109\n+4300`);
    vm.memory.setLoc(address, value);
    vm.r.acc = subtrahend;
    vm.run();
    expect(vm.r.acc).to.equal(expected);
  });

  it('should divide a world from memory to accumulator', async () => {
    const address = 9;
    const value = 1000;
    const divisor = 2;
    const expected = value / divisor;
    vm.loadProgram(`+3209\n+4300`);
    vm.memory.setLoc(address, divisor);
    vm.r.acc = value;
    vm.run();
    expect(vm.r.acc).to.equal(expected);
  });

  it('should multiply a word from memory to accumulator', async () => {
    const address = 9;
    const value = 1000;
    const multiplier = 2;
    const expected = value * multiplier;
    vm.loadProgram(`+3309\n+4300`);
    vm.memory.setLoc(address, multiplier);
    vm.r.acc = value;
    vm.run();
    expect(vm.r.acc).to.equal(expected);
  });
});