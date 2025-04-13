import { describe, it, expect } from 'vitest';
import { WRITE } from "../UVSim/functions/WRITE.js";
import { READ } from "../UVSim/functions/READ.js";
import { VirtualMachine } from '../UVSim/classes/virtualMachine.js';

describe("READ function", () => {
    it("should read the value from the correct memory location", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        const inputRef = { current: { focus: vi.fn() } }; 
        vm.inputRef = inputRef; 
        READ(vm, 5, inputRef);
        expect(inputRef.current.focus).toHaveBeenCalled(); 
        expect(vm.r.isWaitingForInput).toBe(true); 
        expect(vm.r.r1).toBe(5); 
        const input = "42";
        const validation = 42;
        vm.sendInput(input); 
        expect(vm.memory.getLoc(vm.r.r1)).toBe(validation); 
       
    });
});

describe("WRITE function", () => {
    it("should log the correct memory value", () => {
        const MockLog = vi.fn();
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        const memoryValue = 42;
        vm.memory.setLoc(5, memoryValue);
        vm.r.isDebugging = true;
        vm.c.log = MockLog; // Mock the log function
        vm.r.ir = 5; // Set the instruction register to the memory location
        vm.r.pc = 0; // Set the program counter to the instruction location
        vm.r.isRunning = true; // Set the VM to running state
        WRITE(vm, 5); // Call the WRITE function with the memory location
        expect(MockLog).toHaveBeenCalledWith(memoryValue); // Check if the correct memory value was logged

    });
});