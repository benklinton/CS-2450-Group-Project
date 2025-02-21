import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";
import { MemoryItem } from "./Memory/MemoryItem";

export const Memory = () => {
  const { vm } = useContext(GlobalContext);
  return (
    <div className="card bg-dark h-50 mh-50">
      <div className="card-header text-white d-flex justify-content-between align-items-center">
        <h5 className="card-title m-0">Memory</h5>
        <div className="d-flex flex-row">
          <button
            onClick={() => {
              vm.r.reset();
              vm.memory.clear();
            }}
            className="btn btn-light"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="overflow-scroll dark-scrollbar">
        <div className="d-flex flex-column">
          <MemoryItem loc={"pc"} value={vm.r.pc} />
          <MemoryItem loc={"acc"} value={vm.r.acc} />
          <MemoryItem loc={"ir"} value={vm.r.ir} />
          <MemoryItem loc={"mar"} value={vm.r.mar} />
          <div>|</div>
          {vm?.memory?.words?.map((cell, index) => (
            <MemoryItem
              selected={Math.max(0, vm.r.pc - 1) === index}
              key={index}
              loc={index}
              value={cell}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
