'use strict';

const io = require('socket.io');

const server = io(process.env.PORT || 3000);

const queue = {
  greeting: {}
}

server.on('connection', (socket) => {

  socket.on('greeting', (payload) => {
    let id = Math.floor(Math.random() * 100000000);
    queue.greeting[id] = payload;
    console.log(queue);
    socket.broadcast.emit('greeting', { id, payload });
  });

  socket.on('fetchMessages', () => {
    Object.keys(queue.greeting).forEach(id => {
      socket.emit('greeting', { id, payload: queue.greeting[id] });
    })
  });

  socket.on('received', (message) => {
    delete queue.greeting[message.id];
  });
})