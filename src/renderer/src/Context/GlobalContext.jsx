import { createContext, useMemo, useState, useEffect } from "react";
import { VirtualMachine } from "../UVSim/classes/virtualMachine";
import { useVM } from "../Hooks/useVM";
import React from "react";

export const GlobalContext = createContext({
  vm: new VirtualMachine(),
});

export const GlobalContextProvider = ({ children }) => {
  // const [vm, setVM] = useState(new VirtualMachine());
  // const { vm: vmRef, inputRef, rerenderCount } = useVirtualMachine();
  const {
    vms: vmRefs,
    rerenderCount,
    inputRef,
    selected,
    selectVM,
    removeVM,
  } = useVM();
  const [vm, setVM] = useState(vmRefs.current?.[0].vm);

  useEffect(() => {
    setVM(vmRefs.current?.[selected].vm);
  }, [vmRefs, rerenderCount, selected]);

  const value = useMemo(
    () => ({
      vm: vm,
      inputRef: inputRef,
      rerenderCount: rerenderCount,
      selected: selected,
      selectVM: selectVM,
      amountOfVMs: vmRefs.current.length,
      vms: vmRefs.current,
      removeVM: removeVM,
    }),
    [rerenderCount, selected, vm]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
