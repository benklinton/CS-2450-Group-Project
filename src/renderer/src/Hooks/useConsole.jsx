import { useEffect } from "react";

export const defaultConsole = {
  outputs: [],
  log: () => {},
  clear: () => {},
};

export const useConsole = (vm, rerender) => {
  const log = (value) => {
    vm.c.outputs = [...vm.c.outputs, value];
  };

  const clear = () => {
    vm.c.outputs = [];
    rerender();
  };

  useEffect(() => {
    vm.c = {
      outputs: [],
      log,
      clear,
    };
  }, []);
};
