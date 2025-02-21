import { useEffect } from "react";

export const defaultRegister = {
  pc: 0,
  ir: 0,
  mar: 0,
  acc: 0,
  isEnd: false,
  isWaitingForInput: false,
  r1: 0,
  isRunning: false,
  reset: () => {},
};

export const useRegister = (vm, rerender) => {
  const reset = () => {
    vm.r.pc = 0;
    vm.r.ir = 0;
    vm.r.mar = 0;
    vm.r.acc = 0;
    vm.r.isEnd = false;
    vm.r.isWaitingForInput = false;
    vm.r.r1 = 0;
    vm.r.isRunning = false;
    rerender();
  };

  useEffect(() => {
    vm.r = {
      pc: 0,
      ir: 0,
      mar: 0,
      acc: 0,
      isEnd: false,
      isWaitingForInput: false,
      r1: 0,
      isRunning: false,
      reset: reset,
    };
  }, [vm]);

  return { reset };
};
