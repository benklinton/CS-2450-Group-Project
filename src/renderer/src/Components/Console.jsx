import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState } from "react";

export const Console = () => {
  const [input, setInput] = useState("");
  const { vm, inputRef } = useContext(GlobalContext);

  const handleInput = (e) => {
    e.preventDefault();
    e.stopPropagation();
    vm.c.log(input);
    vm.sendInput(input);
    setInput("");
  };

  return (
    <div className="console-container">
      <div className="sbg-dark d-flex gap-3 w-100 flex-row">
        <button onClick={() => vm.run()}>Play</button>
        <button onClick={() => vm.tick()}>Step</button>
        <button onClick={() => vm.c.clear()}>Clear</button>
        <button onClick={() => vm.r.reset()}>Reset Program</button>
      </div>
      <div className="console-output-container">
        {vm?.c?.outputs?.map((log, index) => (
          <div key={index} className="w-100 d-flex gap-3 d-grid text-center">
            {log}
          </div>
        ))}
      </div>
      <div className="w-100 console-input-container">
        <form onSubmit={handleInput}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};
