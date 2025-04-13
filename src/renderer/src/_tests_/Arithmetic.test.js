import { describe, it, expect } from "vitest";
import { ADD } from "../UVSim/functions/ADD.js";
import { SUBTRACT } from "../UVSim/functions/SUBTRACT.js";
import { MULTIPLY } from "../UVSim/functions/MULTIPLY.js";
import { DIVIDE } from "../UVSim/functions/DIVIDE.js";
import { VirtualMachine } from "../UVSim/classes/virtualMachine.js";

describe("Arithmetic Functions", () => {
    it("should ADD a word from memory to accumulator", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 5; // Set the accumulator to 5
        vm.memory.setLoc(3, 3); // Store the value 3 in memory location 3
        const input = vm.memory.getLoc(3); // Get the value from memory location 3
        ADD(vm, input); // Call the ADD function with the value 3
        expect(vm.r.acc).toBe(8); // Check if the accumulator is now 8
    });
    it("should SUBTRACT a word form memory to accumulator", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 5; 
        vm.memory.setLoc(3, 3); 
        const input = vm.memory.getLoc(3); 
        SUBTRACT(vm, input); 
        expect(vm.r.acc).toBe(2); 
    });
    it("should MULTIPLY a word from memory to accumulator", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 5; 
        vm.memory.setLoc(3, 3); 
        const input = vm.memory.getLoc(3); 
        MULTIPLY(vm, input); 
        expect(vm.r.acc).toBe(15);
    });
    it("should DIVIDE a word from memory to accumulator", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 6; 
        vm.memory.setLoc(3, 3); 
        const input = vm.memory.getLoc(3); 
        DIVIDE(vm, input);
        expect(vm.r.acc).toBe(2);
    });
    it("should handle DIVISION by zero correctly", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 6; 
        vm.memory.setLoc(3, 0); 
        const input = vm.memory.getLoc(3); 
        DIVIDE(vm, input); 
        expect(vm.r.acc).toBe(Infinity);
    });
});
