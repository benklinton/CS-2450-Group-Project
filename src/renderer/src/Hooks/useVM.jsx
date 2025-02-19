import { VirtualMachine } from "../UVSim/classes/virtualMachine";
import { useRef, useState } from "react";

export const useVM = () => {
  const [rerenderCount, setRerenderCount] = useState(0);
  const inputRef = useRef(null);
  const rerender = () => {
    setRerenderCount((prev) => prev + 1);
  };

  const vm = useRef(new VirtualMachine(rerender, inputRef));

  return { vm, inputRef, rerenderCount };
};
