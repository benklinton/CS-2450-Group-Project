import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const Files = () => {
  const { vm } = useContext(GlobalContext);
  return (
    <div className="h-50 bg-dark">
      <div className="d-flex justify-content-between">
        <button
          onClick={() => {
            vm.loadProgram(`+1009
+1010
+2009
+3110
+4107
+1109
+4300
+1110
+4300
+0000
+0000
-99999
`);
          }}
        >
          open folder
        </button>
        <button>refresh</button>
      </div>
    </div>
  );
};
