import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState } from "react";
import { MessagingContext } from "../Context/MessagingContext";
import { TestingContext } from "../Context/TestingContext";

// const files = [
//   {
//     name: "program1.txt",
//     content: `+1009
// +1010
// +2009
// +3110
// +4107
// +1109
// +4300
// +1110
// +4300
// +0000
// +0000
// -99999`,
//   },
// ];

export const Files = () => {
  const { vm } = useContext(GlobalContext);
  const { files, getFiles, selectFolder, loadFile } =
    useContext(MessagingContext);
  const { runTests } = useContext(TestingContext);
  const [selectedProgram, setSelectedProgram] = useState(-1);

  const handleLoad = async (file) => {
    setSelectedProgram(file);
    const contents = await loadFile(file);
    vm.r.isTesting = false;
    console.log("loaded", contents);
    const hasAlpha = /[A-Za-z]/.test(contents);
    if (!hasAlpha) {
      vm.loadProgram(contents);
    } else {
      runTests(contents);
      // do test program stuff
    }
  };

  return (
    <div className="card text-white bg-dark h-50 mh-50">
      <div className="d-flex w-100 card-header justify-content-between p-2 align-items-center">
        <h5 className="text-white card-title m-0">Files</h5>
        <div className="d-flex gap-3">
          <button
            className="btn btn-secondary"
            onClick={() => {
              selectFolder();
            }}
          >
            select folder
          </button>
          <button onClick={() => getFiles()} className="btn btn-secondary">
            refresh
          </button>
        </div>
      </div>
      <div className="list-group list-group-flush bg-dark">
        {files.map((file, index) => (
          <button
            type="button"
            className={`list-group-item list-group-item-action ${
              file === selectedProgram ? "active" : "bg-dark text-white"
            }`}
            key={index}
            onClick={() => handleLoad(file)}
          >
            {file}
          </button>
        ))}
      </div>
    </div>
  );
};
