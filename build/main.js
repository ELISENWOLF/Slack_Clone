const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
 
require('@electron/remote/main').initialize()

 
function createWindow() {
    const mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
 
    mainWindow.loadURL(
        isDev 
        ? 'http://localhost:3000' 
        : `file://${path.join(__dirname, '../build/index.html')}`
    );
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})