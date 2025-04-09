import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import VMTab from "./Tab/Tab";

const TabContainer = ({ children }) => {
  const { amountOfVMs, selectVM, vms, selected, removeVM } =
    useContext(GlobalContext);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    selectVM(amountOfVMs);
  };

  const handleSelect = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    selectVM(index);
  };

  const handleClose = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    if (amountOfVMs > 1) {
      //   selectVM(index);
      removeVM(index);
    }
  };
  return (
    <div className="w-100 d-flex overflow-x-auto">
      {vms.map((vm, index) => (
        <VMTab
          onClick={(e) => handleSelect(e, index)}
          key={vm.name}
          name={vm.name}
          onClose={amountOfVMs > 1 ? (e) => handleClose(e, index) : undefined}
          selected={index === selected}
        />
      ))}
      <VMTab onClick={handleClick} name={"+"} selected={false} />
    </div>
  );
};

export default TabContainer;
