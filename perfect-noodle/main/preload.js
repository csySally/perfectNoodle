const { contextBridge } = require("electron");

// 安全地暴露API给渲染进程
contextBridge.exposeInMainWorld("electronAPI", {
  // 可以在这里添加需要在渲染进程中使用的函数
});
