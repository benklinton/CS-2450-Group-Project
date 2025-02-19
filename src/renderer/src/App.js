import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { VirtualMachine } from "./UVSim/classes/virtualMachine";
import { Console } from "./Components/Console";
import { Files } from "./Components/Files";
import "bootstrap/dist/css/bootstrap.css";
import { Memory } from "./Components/Memory";
import { GlobalContextProvider } from "./Context/GlobalContext";
import { HomePage } from "./Pages/Home";

function App() {
  useEffect(() => {
    console.log("app up");
    // Notify Electron that the renderer is ready
    window?.electron?.ipcRenderer?.send("renderer-ready");

    // Listen for messages from the main process
    window?.electron?.ipcRenderer?.on?.("main-message", (event, message) => {
      console.log("Message from main:", message);
    });

    // Cleanup the listener on unmount
    return () => {
      window?.electron?.ipcRenderer?.removeAllListeners?.("main-message");
    };
    const test = new VirtualMachine();
  }, []);
  return (
    <GlobalContextProvider>
      <HomePage />
    </GlobalContextProvider>
  );
}

export default App;
