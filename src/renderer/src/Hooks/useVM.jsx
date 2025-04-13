import { VirtualMachine } from "../UVSim/classes/virtualMachine";
import { useCallback, useRef, useState } from "react";

export const useVM = () => {
  const [rerenderCount, setRerenderCount] = useState(0);
  const inputRef = useRef(null);
  const count = useRef(1);
  const rerender = () => {
    setRerenderCount((prev) => prev + 1);
  };

  const vms = useRef([
    { vm: new VirtualMachine(rerender, inputRef), name: `VM-1` },
  ]);

  const [selected, setSelected] = useState(0);

  const removeVM = useCallback((index) => {
    if (vms.current.length > 1) {
      vms.current.splice(index, 1);
      rerender();
      if (selected >= index && index !== 0) {
        setSelected((value) => value - 1);
      } else {
        setSelected(0);
      }
    }
  });

  const selectVM = useCallback((index) => {
    if (index > vms.current.length - 1) {
      vms.current.push({
        vm: new VirtualMachine(rerender, inputRef),
        name: `VM-${count.current + 1}`,
      });
      rerender();
      setSelected(index);

      count.current++;
      return;
    } else if (index < 0) {
      rerender();
      setSelected(0);
      return;
    }
    rerender();
    setSelected(index);
  });

  return { vms, inputRef, rerenderCount, selected, selectVM, removeVM };
};
