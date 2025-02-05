import { ipcMain } from "electron"
import prompt from 'electron-prompt'
const ExposeHandles = async () =>{
    ipcMain.handle('get-number', async(event, numeroMaximo)=>{
        return new Promise(async (resolve, reject)=>{
            const userInput = await prompt({
                title: 'Jogo do Número Secreto',
                label: `Digite um número entre 1 e ${numeroMaximo}:`,
                inputAttrs: {
                  type: 'number',
                  min: '1',
                  max: `${numeroMaximo}`,
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