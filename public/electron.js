const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;
const isDev = require("electron-is-dev");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 680,
    minWidth: 940,
    minHeight: 560,
    frame: false,
    show: false,
    resizable: false,
    icon: __dirname + "/favicon.ico",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false,
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  const splash = new BrowserWindow({
    width: 700,
    height: 500,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
  });

  splash.loadFile(path.join(__dirname, "./splash-screen.html"));
  splash.center();
  setTimeout(function () {
    splash.close();
    win.center();
    win.show();
  }, 6300);

  /* win.setIcon(path.join(__dirname, "./favicon.ico")); */

  if (isDev) {
    win.webContents.openDevTools();
  }

  ipc.on("closeApp", () => {
    win.close();
  });

  ipc.on("minimizeApp", () => {
    win.minimize();
  });

  ipc.on("maximizeRestoreApp", () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });

  win.on("maximize", () => {
    win.webContents.send("isMaximized");
  });

  win.on("unmaximize", () => {
    win.webContents.send("isRestored");
  });

  var handleRedirect = (e, url) => {
    if (url !== win.webContents.getURL()) {
      e.preventDefault();
      require("electron").shell.openExternal(url);
    }
  };

  win.webContents.on("will-navigate", handleRedirect);
  win.webContents.on("new-window", handleRedirect);
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
