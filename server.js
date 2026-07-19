const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('message_packet', (data) => {
        io.emit('message_packet', {
            user: data.user,
            text: data.text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
    });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 LAN Chat Active!`);
    console.log(`👉 Host UI: http://localhost:${PORT}`);
    console.log(`👉 LAN Devices: http://172.25.242.153:${PORT}\n`);
});
