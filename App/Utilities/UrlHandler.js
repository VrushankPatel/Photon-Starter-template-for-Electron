const { BrowserWindow } = require('electron')

const express = require('express')
const expressApp = express()
const port = 3000
var isMaximized = false;
var mainWindow = null;
//Start the server to communicate with client side Javascript 
//To get requrest of maximize and minimize windows
const startServer = function(){    
    expressApp.get('/:type', (req, res) => {
        var type = req.params.type;
        mainWindow = BrowserWindow.getFocusedWindow();
        type == "Maximize" ? maximize(mainWindow) : type == "Minimize" ? minimize(mainWindow) : () => {};
        res.send("success")
    })

    expressApp.listen(port, () => {})
}

//Maximize the window
const maximize = function(mainWindow){    
    if(isMaximized == true){
        let size = mainWindow.getSize();        
        mainWindow.setSize(Math.floor(size[0]/1.5),Math.floor(size[1]/1.2));
        mainWindow.center();
        isMaximized = false;
    }else{
        mainWindow.maximize();
        isMaximized = true;
    }
}

//Minimize the window
const minimize = function(mainWindow){
    mainWindow.minimize();
}

exports.startServer = startServer;

