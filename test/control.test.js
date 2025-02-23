const { expect } = require('chai');
const { VirtualMachine } = require('../src/renderer/src/UVSim/classes/virtualMachine');

describe('Control', () => {
    let vm;

  beforeEach(() => {
    vm = new VirtualMachine(() => {});
  });

  it('should branch to a specific location in memory', async () => {
    const value = 100;
    vm.loadProgram(`+4000\n+4300`);
    vm.run();
    expect(vm.r.pc).to.equal(value);
  });

  it('should branch to a specific location in memory if the accumulator is negative', async () => {
    const value = 100;
    vm.loadProgram(`+4100\n+4300`);
    vm.r.acc = -1;
    vm.run();
    expect(vm.r.pc).to.equal(value);
  });

  it('should branch to a specific location in memory if the accumulator is zero', async () => {
    const value = 100;
    vm.loadProgram(`+4200\n+4300`);
    vm.r.acc = 0;
    vm.run();
    expect(vm.r.pc).to.equal(value);
  });

  it('should halt execution of the program', async () => {
    vm.loadProgram(`+4300`);
    vm.run();
    expect(vm.r.isEnd).to.be.true;
  });
});