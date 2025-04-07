import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import VMTab from "./Tab/Tab";

const TabContainer = ({ children }) => {
  const { amountOfVMs, selectVM, vms, selected, removeVM } =
    useContext(GlobalContext);

  const handleClick = () => {
    selectVM(amountOfVMs);
  };

  const handleSelect = (index) => {
    selectVM(index);
  };

  const handleClose = (index) => {
    if (amountOfVMs > 1) {
      //   selectVM(index);
      removeVM(index);
    }
  };
  return (
    <div className="w-100 d-flex overflow-x-auto">
      {vms.map((vm, index) => (
        <VMTab
          onClick={() => handleSelect(index)}
          key={vm.name}
          name={vm.name}
          onClose={amountOfVMs > 1 ? () => handleClose(index) : undefined}
          selected={index === selected}
        />
      ))}
      <VMTab onClick={handleClick} name={"+"} selected={false} />
    </div>
  );
};

export default TabContainer;
