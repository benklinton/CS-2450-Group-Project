import { functions } from "../UVSim/functions/functions";
import { defaultConsole, useConsole } from "./useConsole";
import { defaultMemory, useMemory } from "./useMemory";
import { defaultRegister, useRegister } from "./useRegister";
import { useRef, useEffect, useState } from "react";

export const useVirtualMachine = () => {
  //this will help us rerender the front end every time the vm is updated
  const [rerenderCount, setRerenderCount] = useState(0);
  const rerender = () => {
    setRerenderCount((prev) => prev + 1);
  };
  //stored in a ref as to keep properly have values updated and changed without needing rerenders
  const vm = useRef({
    r: defaultRegister,
    memory: defaultMemory,
    c: defaultConsole,
  });

  useRegister(vm.current, rerender);
  useMemory(vm.current, rerender);
  useConsole(vm.current, rerender);
  const inputRef = useRef(null);

  const loadProgram = (program) => {
    const { r, memory, c } = vm.current;
    memory.loadProgram(program);
    r.reset();
    c.log("Program loaded");
    // r.ir = memory.getLoc(r.pc);
    // r.pc += 1;
    rerender();
  };

  const run = () => {
    const { r } = vm.current;
    r.isRunning = true;
    while (!r.isEnd) {
      tick();
      rerender();
      if (r.isWaitingForInput) {
        break;
      }
    }
  };

  const tick = () => {
    const { r, memory, c } = vm.current;
    if (r.isWaitingForInput || r.isEnd) {
      if (r.isWaitingForInput) inputRef?.current?.focus();
      return;
    }
    r.ir = memory.getLoc(r.pc);
    r.pc += 1;

    execute();
    rerender();
  };

  const sendInput = (input) => {
    const { r, memory, c } = vm.current;
    if (!r.isWaitingForInput) return;
    const i = parseFloat(input.trim());
    if (!isNaN(i)) {
      memory.setLoc(r.r1, i);
      r.isWaitingForInput = false;
      if (r.isRunning) {
        run();
      }
    } else {
      throw new Error("Input must be number");
    }
  };

  const getOpcode = () => {
    const { r, memory, c } = vm.current;
    const opcode = r.ir < 0 ? Math.ceil(r.ir / 1000) : Math.floor(r.ir / 1000);
    return opcode;
  };

  const getOperand = () => {
    const { r, memory, c } = vm.current;
    return r.ir % 1000;
  };

  const execute = () => {
    const { r, memory, c } = vm.current;
    //get the opcode and operand by dividing by 100 to get the last two digits we also need to do floor or ceil depending on if it is negative or not
    const opcode = getOpcode();
    const operand = getOperand();

    //check if the opcode and operand are valid if not then we have an invalid instruction and odds are are infinitely looping
    if (Number.isNaN(opcode) || Number.isNaN(operand)) {
      throw new Error("Invalid instruction");
    }

    if (opcode < -99 || opcode > 99) {
      throw new Error("Invalid opcode");
    }

    //DEBUG for opcode and operand
    if (opcode != 0 || operand != 0) {
      // c.log(opcode, operand);
      console.log(opcode, operand);
    }
    return functions?.[opcode]?.(vm.current, operand, inputRef);
  };

  useEffect(() => {
    vm.current.loadProgram = loadProgram;
    vm.current.run = run;
    vm.current.tick = tick;
    vm.current.sendInput = sendInput;
    vm.current.getOpcode = getOpcode;
    vm.current.getOperand = getOperand;
    vm.current.execute = execute;
  }, []);

  return { vm: vm.current, inputRef, rerenderCount };
};
