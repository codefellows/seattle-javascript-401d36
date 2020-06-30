'use strict';

const net = require('net');

const PORT = process.env.PORT || 3000;
const server = net.createServer();

const socketPool = {};

server.on('connection', (socket) => {
  const id = Math.floor(Math.random() * 10000000);
  socketPool[id] = socket;
  console.log('Connection established at ' + id);

  socket.on('data', handleMessage);

  socket.on('error', (e) => console.log(e));
  socket.on('end', () => { delete socketPool[id] });
});

server.on('error', (e) => {
  console.log('SERVER ERROR found', e);
});

function handleMessage(buffer) {
  // JSON;parse turns a string into and object
  let message = JSON.parse(buffer.toString());

  // perform object like things on message
  // what properties are on our message object?

  // what can we do here to only write to speific sockets
  for (let socket in socketPool) {
    socketPool[socket].write(JSON.stringify(message));
  }
}

server.listen(PORT, () => {
  console.log('Server up');
});