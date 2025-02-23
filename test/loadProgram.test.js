const { expect } = require('chai');
const { VirtualMachine } = require('../src/renderer/src/UVSim/classes/virtualMachine');
const { loadFile } = require('../src/files/loadFile');

describe('Load BasicML Program', () => {
  let vm;

  beforeEach(() => {
    vm = new VirtualMachine(() => {});
  });

  it('should load a BasicML program and execute it', async () => {
    const filePath = 'programs/Test1.txt';
    const fileContents = loadFile(filePath);

    expect(fileContents).to.be.a('string');
    expect(fileContents).to.match(/^\+\d{4}(\r?\n\+\d{4})*$/);

    vm.loadProgram(fileContents);
    expect(vm.memory.getMemory()).to.include.members([1007, 4300]);

    vm.run();
    expect(vm.r.isEnd).to.be.true;
  });

  it('should reject invalid instructions in a BasicML program', async () => {
    const invalidFilePath = 'programs/InvalidTest.txt';
    const invalidFileContents = loadFile(invalidFilePath);

    vm.loadProgram(invalidFileContents);
    try {
      vm.run();
    } catch (error) {
      expect(error.message).to.equal('Invalid instruction encountered');
      expect(vm.r.isEnd).to.be.false;
    }
  });

  it('should reject invalid input', async () => {
    const invalidInput = 'Kevin';
    vm.inputRef = { current: { focus: () => {}, placeholder: '' } };
    vm.loadProgram('+1009\n+4300');
    expect(vm.memory.getMemory()).to.include.members([1009, 4300]);
    vm.run();
    expect(vm.r.isWaitingForInput).to.be.true;
    try {
      vm.sendInput(invalidInput);
    } catch (error) {
      expect(error.message).to.equal('Invalid input encountered');
      expect(vm.r.isEnd).to.be.false;
    }
  });
});