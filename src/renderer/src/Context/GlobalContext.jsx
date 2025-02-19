import { createContext, useMemo, useState } from "react";
import { VirtualMachine } from "../UVSim/classes/virtualMachine";

export const GlobalContext = createContext({
  vm: new VirtualMachine(),
});

export const GlobalContextProvider = ({ children }) => {
  const vm = useState(new VirtualMachine());
  console.log(vm);
  const value = useMemo(
    () => ({
      vm: vm?.[0],
    }),
    [vm?.[0], vm?.[0]?.memory?.words]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
