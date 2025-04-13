import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState } from "react";
import React from "react";

export const Console = () => {
  const [input, setInput] = useState("");
  const { vm, inputRef } = useContext(GlobalContext);

  const handleInput = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isNaN(parseFloat(input))) vm.c.log(input);
    vm.sendInput(input);
    setInput("");
  };

  return (
    <div className="console-container card text-white pb-2 h-100 sback">
      <div className="d-flex gap-3 w-100 flex-row card-header justify-content-between">
        <div className="d-flex gap-3">
          <button className="btn btn-success" onClick={() => vm.run()}>
            Play
          </button>
          <button className="btn btn-warning" onClick={() => vm.tick()}>
            Step
          </button>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-light" onClick={() => vm.c.clear()}>
            Clear
          </button>
          <button className="btn btn-light" onClick={() => vm.r.reset()}>
            Reset Program
          </button>
        </div>
      </div>
      <div className="console-output-container card-body dark-scrollbar pback">
        {vm?.c?.outputs?.map((log, index) => (
          <div
            key={index}
            className={`w-100 d-flex gap-3 d-grid text-center ${
              log.type === "error"
                ? "text-danger"
                : log.type === "success"
                ? "text-success"
                : "text-white"
            }`}
          >
            {log.msg}
          </div>
        ))}
      </div>
      <div className="w-100 console-input-container">
        <form onSubmit={handleInput}>
          <div className="input-group mb-3">
            <input
              className="form-control bg-light"
              placeholder="Console Input"
              aria-label="Console Input"
              aria-describedby="basic-addon2"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <div className="input-group-append">
              <button
                className="input-group-text btn btn-primary"
                id="basic-addon2"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
