"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
console.log("Preload carregado com sucesso!");
electron_1.contextBridge.exposeInMainWorld('api', {
    getNumber: () => electron_1.ipcRenderer.invoke('get-number', numeroMaximo),
    validateNumberSecret: (secret) => electron_1.ipcRenderer.invoke('validate-number-secret', secret)
});
