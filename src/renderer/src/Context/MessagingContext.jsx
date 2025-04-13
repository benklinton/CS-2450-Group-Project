import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { programSamples } from "../UVSim/programs/samples";
import React from "react";

export const MessagingContext = createContext({
  files: [],
});

export const MessagingContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [chosenDirectory, setChosenDirectory] = useState(null);
  const { vm } = useContext(GlobalContext);

  useEffect(() => {
    // Notify Electron that the renderer is ready
    window?.electron?.ipcRenderer?.send("renderer-ready", chosenDirectory);

    // Listen for messages from the main process
    window?.electron?.ipcRenderer?.on?.("files", (event, message) => {
      console.log("received files", message);
      if (message?.files) {
        setFiles(message.files.filter((file) => file !== ".DS_Store"));
      }
    });

    window?.electron?.ipcRenderer?.on?.("file-contents", (event, message) => {
      console.log("received file contents", message);
      if (message?.file) {
        vm.loadProgram(message.file);
      }
    });

    // Cleanup the listener on unmount
    return () => {
      window?.electron?.ipcRenderer?.removeAllListeners?.("main-message");
    };
  }, []);

  const getFiles = (directory = chosenDirectory) => {
    if (window?.electron?.ipcRenderer)
      window?.electron?.ipcRenderer?.send("get-files", directory);
    else {
      setFiles(programSamples.map((file) => file.name));
    }
  };

  const retrieveFile = async (fileName) => {
    if (window?.electron?.ipcRenderer) {
      const response = await window?.electron?.ipcRenderer?.invoke(
        "load-file",
        {
          file: fileName,
          directory: chosenDirectory,
        }
      );
      if (!response.file) {
        throw new Error("Error: File DNE: " + fileName);
      }
      return response.file;
    } else {
      const file = programSamples.find(
        (file) => file.name === fileName
      )?.content;
      if (!file) {
        throw new Error("Error: File DNE: " + fileName);
      } else {
        return file;
      }
    }
  };

  const selectFolder = async () => {
    const folderPath = await window.electron.ipcRenderer.invoke(
      "select-folder"
    );
    if (folderPath) {
      setChosenDirectory(folderPath);
      getFiles(folderPath);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  const value = useMemo(
    () => ({
      files: files,
      getFiles,
      retrieveFile,
      selectFolder,
      chosenDirectory,
    }),
    [files, getFiles, retrieveFile, selectFolder, chosenDirectory]
  );

  return (
    <MessagingContext.Provider value={value}>
      {children}
    </MessagingContext.Provider>
  );
};
