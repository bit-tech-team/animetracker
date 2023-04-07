const { app, BrowserWindow, ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const ipc = ipcMain;
const isDev = require("electron-is-dev");

let win;

const createWindow = () => {
  win = new BrowserWindow({
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
      devTools: true, //change to false for production
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

  autoUpdater.on("update-available", () => {
    win.webContents.send("update_available");
  });

  var handleRedirect = (e, url) => {
    if (url !== win.webContents.getURL()) {
      e.preventDefault();
      require("electron").shell.openExternal(url);
    }
  };

  autoUpdater.checkForUpdatesAndNotify();

  win.webContents.on("will-navigate", handleRedirect);
  win.webContents.on("new-window", handleRedirect);
};

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on("app_version", (event) => {
  event.sender.send("app_version", { version: app.getVersion() });
});

autoUpdater.on("update-available", () => {
  win.webContents.send("update_available");
});

autoUpdater.on("update-downloaded", () => {
  win.webContents.send("update_downloaded");
});

ipcMain.on("restart_app", () => {
  autoUpdater.quitAndInstall();
});

autoUpdater.on('error', (message) => {
  console.error('There was a problem updating the application')
  console.error(message)
})
