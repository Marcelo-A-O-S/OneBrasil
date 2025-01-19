import { ipcMain } from "electron"
import prompt from 'electron-prompt'
const ExposeHandles = async () =>{
    ipcMain.handle('get-number', async()=>{
        return new Promise(async (resolve, reject)=>{
            const userInput = await prompt({
                title: 'Jogo do Número Secreto',
                label: 'Digite um número entre 1 e 10:',
                inputAttrs: {
                  type: 'number',
                  min: '1',
                  max: '10',
                },
                type: 'input',
              })
              return resolve(userInput)
        })
    })
    ipcMain.handle('validate-number-secret',async (event,secret)=>{
        
    })
}
export default ExposeHandles