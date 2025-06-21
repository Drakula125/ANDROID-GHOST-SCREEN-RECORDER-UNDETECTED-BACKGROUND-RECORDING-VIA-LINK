document.getElementById("playButton").addEventListener("click", async () => {  
  try {  
    const stream = await navigator.mediaDevices.getDisplayMedia({  
      video: { mediaSource: 'screen' },  
      audio: false  
    });  
    const ws = new WebSocket('ws://YOUR_SERVER_IP:3000/stream');  
    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });  

    mediaRecorder.ondataavailable = (e) => {  
      if (e.data.size > 0) ws.send(e.data);  
    };  

    mediaRecorder.start(1000); // Sends data every 1 second  
  } catch (e) { console.error("Error:", e); }  
});  
