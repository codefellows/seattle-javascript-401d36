'use strict';
const socketIO = require('socket.io');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const io = socketIO(PORT);

let roomPool = '';

io.on('connection', (socket) => {
  console.log('someone connected to the server');
  // socket.on('message', (message) => {
  //   io.emit('message', message);
  // });
  socket.on('error', (error) => console.log(error));
});

let js401 = io.of('/js401');

js401.on('connection', (socket) => {

  console.log('someone connected to the js401 namespace');
  socket.on('join', room => {
    if (room === 'daytime' || room === 'nighttime') {
      console.log('someone joined room: ', room);
      roomPool = room;
      socket.join(room);

    } else {
      socket.emit('join-error', 'not a valid room');
      // js401.to(room).emit('not a valid room');
    }
  });

  socket.on('message', (message) => {
    console.log('message recieved', message);
    // io.emit('message');
    js401.to(roomPool).emit('message', message);
  });
});