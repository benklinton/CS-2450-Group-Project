const { expect } = require('chai');
const { VirtualMachine } = require('../src/renderer/src/UVSim/classes/virtualMachine');

describe('Load and Store Instructions', () => {
    let vm;
    
    beforeEach(() => {
        vm = new VirtualMachine(() => {});
    });

    it('should load word from memory into accumulator', async () => {
        const address = 9;
        const value = 1000;
        vm.loadProgram(`+2009\n+4300`);
        vm.memory.setLoc(address, value);
        vm.run();
        expect(vm.r.acc).to.equal(value);
      });

    it('should store word from accumulator to memory', async () => {
        const address = 9;
        const value = 1000;
        vm.loadProgram(`+2109\n+4300`);
        vm.r.acc = value;
        vm.run();
        expect(vm.memory.getLoc(address)).to.equal(value);
      });
    
});
    