import { describe, it, expect } from 'vitest';
import { BRANCH } from "../UVSim/functions/BRANCH.js";
import { BRANCHNEG } from "../UVSim/functions/BRANCHNEG.js";
import { BRANCHZERO } from "../UVSim/functions/BRANCHZERO.js";
import { VirtualMachine } from '../UVSim/classes/virtualMachine.js';

describe("Branch Functions", () => {
    it("should BRANCH to the correct memory location", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.pc = 0; // Set the program counter to 0
        BRANCH(vm, 5); // Call the BRANCH function with the target address 5
        expect(vm.r.pc).toBe(5); // Check if the program counter is now 5
    });

    it("should BRANCHNEG to the correct memory location", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = -1; // Set the accumulator to a negative value
        vm.r.pc = 0; // Set the program counter to 0
        BRANCHNEG(vm, 5); // Call the BRANCHNEG function with the target address 5
        expect(vm.r.pc).toBe(5); // Check if the program counter is now 5
    });

    it("should not BRANCHNEG when accumulator is non-negative", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 1; // Set the accumulator to a positive value
        vm.r.pc = 0; // Set the program counter to 0
        BRANCHNEG(vm, 5); // Call the BRANCHNEG function with the target address 5
        expect(vm.r.pc).toBe(1); // Check if the program counter is still at its original value (1)
    });

    it("should BRANCHZERO to the correct memory location", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 0; // Set the accumulator to zero
        vm.r.pc = 0; // Set the program counter to 0
        BRANCHZERO(vm, 5); // Call the BRANCHZERO function with the target address 5
        expect(vm.r.pc).toBe(5); // Check if the program counter is now 5
    });

    it("should not BRANCHZERO when accumulator is non-zero", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 1
        vm.r.pc = 0; // Set the program counter to 0
        BRANCHZERO(vm, 5); // Call the BRANCHZERO function with the target address 5
        expect(vm.r.pc).toBe(1); // Check if the program counter is still at its original value (1)
    });
});