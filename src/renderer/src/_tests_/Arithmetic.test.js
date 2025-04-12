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
        ADD(vm, 3); // Call the ADD function with the value 3
        expect(vm.r.acc).toBe(8); // Check if the accumulator is now 8
    }
    );
    it("should SUBTRACT a word form memory to accumulator", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 5; // Set the accumulator to 5
        SUBTRACT(vm, 3); // Call the SUB function with the value 3
        expect(vm.r.acc).toBe(2); // Check if the accumulator is now 2
    });
    it("should MULTIPLY a word from memory to accumulator", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 5; // Set the accumulator to 5
        MULTIPLY(vm, 3); // Call the MULT function with the value 3
        expect(vm.r.acc).toBe(15); // Check if the accumulator is now 15
    });
    it("should DIVIDE a word from memory to accumulator", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 6; // Set the accumulator to 6
        DIVIDE(vm, 3); // Call the DIV function with the value 3
        expect(vm.r.acc).toBe(2); // Check if the accumulator is now 2
    });
    it("should handle DIVISION by zero correctly", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 6; // Set the accumulator to 6
        DIVIDE(vm, 0); // Call the DIV function with the value 0
        expect(vm.r.acc).toBe(0); // Check if the accumulator is now 0
    });
});
