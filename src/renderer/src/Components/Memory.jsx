import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";
import { MemoryItem } from "./Memory/MemoryItem";
import React from "react";

export const Memory = () => {
  const { vm } = useContext(GlobalContext);
  return (
    <div className="card h-50 mh-50 sback">
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
      <div className="overflow-scroll pback">
        <div className="d-flex flex-column">
          <MemoryItem
            loc={"pc"}
            value={vm.r.pc}
            onChange={(loc, value) => {
              if (Number(value) > 249) {
                value = 249;
              }
              vm.r.pc = value;
              vm.rerender();
            }}
          />
          <MemoryItem
            loc={"acc"}
            value={vm.r.acc}
            onChange={(loc, value) => {
              vm.r.acc = value;
              vm.rerender();
            }}
          />
          <MemoryItem
            loc={"ir"}
            value={vm.r.ir}
            onChange={(loc, value) => {
              vm.r.ir = value;
              vm.rerender();
            }}
          />
          <MemoryItem
            loc={"mar"}
            value={vm.r.mar}
            onChange={(loc, value) => {
              vm.r.mar = value;
              vm.rerender();
            }}
          />
          <div>|</div>
          {vm?.memory?.words?.map((cell, index) => (
            <MemoryItem
              selected={Math.max(0, vm.r.pc - 1) === index}
              key={index}
              loc={index}
              value={cell}
              onChange={(loc, value) => {
                vm.memory.setLoc(loc, value);
                vm.rerender();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
