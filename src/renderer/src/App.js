import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("app up");
    // Notify Electron that the renderer is ready
    window.electron.ipcRenderer.send("renderer-ready");

    // Listen for messages from the main process
    window.electron.ipcRenderer.on("main-message", (event, message) => {
      console.log("Message from main:", message);
    });

    // Cleanup the listener on unmount
    return () => {
      window.electron.ipcRenderer.removeAllListeners("main-message");
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
