const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require("path");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {

})

io.on('connection', (socket) => {

    console.log('client connected! ' + socket.id);

    socket.on('chat', (chat) => {
        io.emit('chat', "{\n\t\"source\": \"" + socket.id+"\",\n\t\"data\": \"" + chat +"\"\n}");
    })

})

app.use('/static', express.static('./client/static'));

app.get('/', (req, res) => {
    res.sendFile('./client/index.html', {root: __dirname})
})

httpServer.listen(80, () => {
    console.log('listening on *:80')
})



