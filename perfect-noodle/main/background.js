const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 加载应用
  const startUrl = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../out/index.html")}`;

  mainWindow.loadURL(startUrl);

  // 在开发环境打开开发者工具
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  // 当窗口关闭时触发
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// 当Electron完成初始化时创建窗口
app.whenReady().then(createWindow);

// 当所有窗口关闭时退出应用，macOS除外
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// macOS中点击dock图标重新创建窗口
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
