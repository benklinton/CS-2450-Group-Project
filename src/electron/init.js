const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const {
  getFilesFromProgramFolder,
  getDefaultProgramPath,
} = require("../files/getFiles");
const { loadFile } = require("../files/loadFile");
const { openFolder } = require("../files/openFolder");

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
    // win.webContents.openDevTools();
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
    const files = getFilesFromProgramFolder();
    event.reply("files", { files: files });
  });

  ipcMain.on("get-files", (event, args) => {
    const files = getFilesFromProgramFolder();
    event.reply("files", { files: files });
  });

  ipcMain.on("save-file", (event, args) => {
    console.log(args);
  });

  ipcMain.on("open-program-folder", (event, args) => {
    openFolder(getDefaultProgramPath());
  });

  ipcMain.handle("load-file", (event, args) => {
    const file = loadFile(getDefaultProgramPath() + "/" + args.file);
    return { file: file, name: args.file };
  });
};

module.exports = { startElectron };
