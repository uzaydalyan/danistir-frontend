const express = require('express');

const io = require('socket.io')({
    path:'/webrtc'
})

const app = express();
const port = 8080;


const server = app.listen(port, () => {
    console.log("WebRTC is listening on port: ${port}")
})

io.listen(server);

const webRTCNameSpace = io.of('/webRTCPeers');

webRTCNameSpace.on('connection', socket => {

    console.log(socket.id);
    socket.emit('connection-success', {

        status:"connection-success",
        socketId:socket.id
    })

    socket.on('disconnect', () => {

        console.log(socket.id , " is disconnected.");
    })

    socket.on('sdp', (data) => {
        console.log(data)
        socket.broadcast.emit('sdp', data)
    })

    socket.on('candidate', (data) => {

        socket.broadcast.emit('candidate', data)
    })
})
