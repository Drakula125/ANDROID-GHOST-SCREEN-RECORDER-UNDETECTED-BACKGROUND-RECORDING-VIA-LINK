const express = require('express');  
const WebSocket = require('ws');  
const fs = require('fs');  

const app = express();  
const wss = new WebSocket.Server({ port: 3000 });  

wss.on('connection', (ws) => {  
  ws.on('message', (data) => {  
    fs.appendFile('screen_recording.webm', data, (err) => {  
      if (err) console.error("Save failed:", err);  
    });  
  });  
});  

app.listen(3000, () => console.log("Server running on port 3000!"));  
