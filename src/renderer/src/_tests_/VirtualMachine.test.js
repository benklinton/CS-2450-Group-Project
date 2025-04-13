 import { describe, it, expect } from 'vitest';
 import { VirtualMachine } from '../UVSim/classes/virtualMachine.js';

 describe('VirtualMachine', () => {
    it('should load a program into memory', () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        const program = '+1009\n+1010\n+2009\n+4300';
        vm.loadProgram(program);

        expect(vm.memory.getLoc(0)).toBe(1009);
        expect(vm.memory.getLoc(1)).toBe(1010);
        expect(vm.memory.getLoc(2)).toBe(2009);
        expect(vm.memory.getLoc(3)).toBe(4300);
    });

    it('should execute a program and halt', () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        const program = '+4300';
        vm.loadProgram(program);
 
        vm.run();

        // Check that the program has halted
        expect(vm.r.isEnd).toBe(true);
    });

    it('should throw and error for invaild instructions', () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        const program = '+9999'; // Invalid opcode
        vm.loadProgram(program);

        // Mock the console log to capture the error message
        const consoleLogSpy = vi.spyOn(vm.c, 'log');
        vm.run();
        expect(consoleLogSpy).toHaveBeenCalledWith("Out Of Bounds: 250", "error");
        expect(vm.r.isEnd).toBe(true);
    });

    it('should contain 250 memory locations', () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        expect(vm.memory.words).toHaveLength(250); // Check if memory has 250 locations
    });
});


        
        