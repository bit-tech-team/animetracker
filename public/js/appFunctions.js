const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;
const maxResBtn = document.getElementById("maxResBtn");
const minimizeBtn = document.getElementById("minimizeBtn");
const closeBtn = document.getElementById("closeBtn");

function changeMaxResBtn(isMaximizedApp) {
  if (isMaximizedApp) {
    maxResBtn.title = "Restore";
    maxResBtn.classList.remove("maximizeBtn");
    maxResBtn.classList.add("restoreBtn");
  } else {
    maxResBtn.title = "Maximize";
    maxResBtn.classList.remove("restoreBtn");
    maxResBtn.classList.add("maximizeBtn");
  }
}

closeBtn.addEventListener("click", () => {
  ipc.send("closeApp");
});

ipc.on("isMaximized", () => {
  changeMaxResBtn(true);
});
ipc.on("isRestored", () => {
  changeMaxResBtn(false);
});

minimizeBtn.addEventListener("click", () => {
  ipc.send("minimizeApp");
});



/* maxResBtn.addEventListener("click", () => {
  ipc.send("maximizeRestoreApp");
}); */