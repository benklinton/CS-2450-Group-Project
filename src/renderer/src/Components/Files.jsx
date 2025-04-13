import { GlobalContext } from "../Context/GlobalContext";
import { useContext, useState } from "react";
import { MessagingContext } from "../Context/MessagingContext";
// import { TestingContext } from "../Context/TestingContext";
import React from "react";

export const Files = () => {
  Array.from(document.getElementsByClassName("pback")).forEach((elem) => {
    elem.style.backgroundColor = "#191c1f"; // Primary color
  });
  const { vm } = useContext(GlobalContext);
  const { files, getFiles, selectFolder, retrieveFile } =
    useContext(MessagingContext);
  // const { runTests } = useContext(TestingContext);
  const [selectedProgram, setSelectedProgram] = useState(-1);

  const handleLoad = async (file) => {
    setSelectedProgram(file);
    const contents = await retrieveFile(file);
    vm.r.isTesting = false;
    console.log("loaded", contents);
    const hasAlpha = /[A-Za-z]/.test(contents);
    if (!hasAlpha) {
      vm.loadProgram(contents);
    } else {
      // runTests(contents);
    }
  };

  return (
    <div className="card txt-normal h-50 mh-50 sback">
      <div className="d-flex w-100 card-header justify-content-between p-2 align-items-center">
        <h5 className="txt-normal card-title m-0 text-white">Files</h5>
        <div className="d-flex gap-3">
          <button className="btn btn-secondary" onClick={() => selectFolder()}>
            open folder
          </button>
          <button onClick={() => getFiles()} className="btn btn-secondary">
            refresh
          </button>
        </div>
      </div>
      <div className="list-group list-group-flush">
        {files.map((file, index) => (
          <button
            type="button"
            className={`list-group-item list-group-item-action pback ${
              file === selectedProgram ? "active" : "pback text-white"
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
