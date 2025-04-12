import { describe, it, expect } from "vitest";
import { LOAD } from "../UVSim/functions/LOAD.js";
import { STORE } from "../UVSim/functions/STORE.js";
import { VirtualMachine } from "../UVSim/classes/virtualMachine.js";


describe("LOAD function", () => {
    it("should load the value from the correct memory location", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.memory.setLoc(5, 42); // Set a value in memory location 5
        LOAD(vm, 5); // Call the LOAD function with the memory location
        expect(vm.r.acc).toBe(42); // Check if the accumulator has the correct value
    });
});

describe("STORE function", () => {
    it("should store the value in the correct memory location", () => {
        const rerender = vi.fn();
        const vm = new VirtualMachine(rerender, null);
        vm.r.acc = 42; // Set a value in the accumulator
        STORE(vm, 5); // Call the STORE function with the memory location
        expect(vm.memory.getLoc(5)).toBe(42); // Check if the memory location has the correct value
    });
});