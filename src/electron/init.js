const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const startElectron = () => {
  function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        // Disable node integration for security and enable context isolation
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, "preload.js"),
      },
    });
    if (process.env.NODE_ENV === "development") {
      win.loadURL("http://localhost:3000");
      console.log("Development Mode");
    } else {
      console.log("Prod Mode");
      win.loadFile(path.join(__dirname, "../renderer/build/index.html"));
    }
    win.webContents.openDevTools();
  }

  app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  ipcMain.on("renderer-ready", (event, args) => {
    console.log("yyeah");
    event.reply("main-message", "Hello from Electron main process!");
  });
};

module.exports = { startElectron };
