import { contextBridge, ipcRenderer } from "electron";
console.log("Preload carregado com sucesso!")
contextBridge.exposeInMainWorld('api',{
    getNumber: ()=> ipcRenderer.invoke('get-number', numeroMaximo),
    validateNumberSecret: (secret: number)=>ipcRenderer.invoke('validate-number-secret',secret)
})