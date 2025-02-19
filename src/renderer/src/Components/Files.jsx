import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState } from "react";

const files = [
  {
    name: "program1.txt",
    content: `+1009
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
-99999`,
  },
];

export const Files = () => {
  const { vm } = useContext(GlobalContext);
  const [selectedProgram, setSelectedProgram] = useState(-1);
  return (
    <div className="card text-white bg-dark h-50 mh-50">
      <div className="d-flex w-100 card-header justify-content-between p-2 align-items-center">
        <h5 className="text-white card-title m-0">Files</h5>
        <div className="d-flex gap-3">
          <button className="btn btn-secondary" onClick={() => {}}>
            open folder
          </button>
          <button className="btn btn-secondary">refresh</button>
        </div>
      </div>
      <div className="list-group list-group-flush bg-dark">
        {files.map((file, index) => (
          <button
            type="button"
            className={`list-group-item list-group-item-action ${
              file.name === selectedProgram ? "active" : "bg-dark text-white"
            }`}
            key={index}
            onClick={() => {
              setSelectedProgram(file.name);
              vm.loadProgram(file.content);
            }}
          >
            {file.name}
          </button>
        ))}
      </div>
    </div>
  );
};
