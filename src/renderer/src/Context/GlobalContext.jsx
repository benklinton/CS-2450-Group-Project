import { createContext, useMemo, useState, useEffect } from "react";
import { VirtualMachine } from "../UVSim/classes/virtualMachine";
import { useVirtualMachine } from "../Hooks/useVirtualMachine";

export const GlobalContext = createContext({
  vm: new VirtualMachine(),
});

export const GlobalContextProvider = ({ children }) => {
  // const [vm, setVM] = useState(new VirtualMachine());
  const { vm: vmRef, inputRef, rerenderCount } = useVirtualMachine();
  const [vm, setVM] = useState(vmRef);

  useEffect(() => {
    setVM({ ...vmRef });
  }, [vmRef, rerenderCount]);

  const value = useMemo(
    () => ({
      vm: vm,
      inputRef: inputRef,
      rerenderCount: rerenderCount,
    }),
    [rerenderCount]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
