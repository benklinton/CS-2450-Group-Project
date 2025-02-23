const { expect } = require('chai');
const { VirtualMachine } = require('../src/renderer/src/UVSim/classes/virtualMachine');

describe('Input/Output', () => {
    let vm;
    
    beforeEach(() => {
        vm = new VirtualMachine(() => {});
    });
    
    it('should read user input into memory', async () => {
        const input = '1234';
        const address = 9;
        const expected = 1234;
    
        vm.inputRef = { current: { focus: () => {}, placeholder: '' } };
        vm.input = input;
        vm.loadProgram('+1009\n+4300');
        expect(vm.memory.getMemory()).to.include.members([1009, 4300]);
        vm.run();
        expect(vm.r.isWaitingForInput).to.be.true;
        vm.sendInput(input);
        expect(vm.memory.getLoc(address)).to.equal(expected);
        
    
      });
    it('should write a word from memory to screen', async () => {
        // Need to fix Write function I think??
      });
    
    });