import {BrowserWindow, app} from "electron"
import path from 'path'
import ExposeHandles from "./handlers"
const CreateWindow = async () =>{
    const mainWindow = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: true,
            preload:`${path.join(__dirname,'preload.js')}`
        },
        icon:`${path.join(__dirname,'img/trophy.png')}`
    })
    mainWindow.loadURL(`file://${path.resolve(__dirname, 'index.html')}`)
    mainWindow.maximize()
    await ExposeHandles()
}
app.on('activate', async ()=>{
    if(window == null){
        await CreateWindow()
    }
})
app.on('ready',async()=>{
    await CreateWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
       app.quit()
    }
  })