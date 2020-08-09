const electron = require("electron"),
  { app, BrowserWindow, Menu, ipcMain } = electron,
  isMac = process.platform === "darwin";

let window;

app.on("ready", () => {
  window = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
    },
    resizable: false,
  });

  window.loadFile("assets/index.html");
});
