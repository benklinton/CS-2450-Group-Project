import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { programSamples } from "../UVSim/programs/samples";

export const MessagingContext = createContext({
  files: [],
});

export const MessagingContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const { vm } = useContext(GlobalContext);

  useEffect(() => {
    // Notify Electron that the renderer is ready
    window?.electron?.ipcRenderer?.send("renderer-ready");

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

  const getFiles = () => {
    if (window?.electron?.ipcRenderer)
      window?.electron?.ipcRenderer?.send("get-files");
    else {
      setFiles(programSamples.map((file) => file.name));
    }
  };

  const loadFile = async (fileName) => {
    if (window?.electron?.ipcRenderer) {
      const response = await window?.electron?.ipcRenderer?.invoke(
        "load-file",
        {
          file: fileName,
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

  const revealFolder = () => {
    window?.electron?.ipcRenderer?.send("open-program-folder");
  };

  useEffect(() => {
    getFiles();
  }, []);

  const value = useMemo(
    () => ({
      files: files,
      getFiles,
      loadFile,
      revealFolder,
    }),
    [files, getFiles, loadFile, revealFolder]
  );

  return (
    <MessagingContext.Provider value={value}>
      {children}
    </MessagingContext.Provider>
  );
};
