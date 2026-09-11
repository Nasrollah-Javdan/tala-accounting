const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true,

  getAppInfo: () => ipcRenderer.invoke('app:getInfo'),
});