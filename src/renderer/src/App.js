import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";

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
  }, []);
  return <div className="app-container"></div>;
}

export default App;
