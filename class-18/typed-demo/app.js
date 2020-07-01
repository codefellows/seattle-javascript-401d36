'use strict';

const socketIO = require('socket.io');

// all we need here is to start a socket server, server is listeninf at this point
/* STEP 1 */ const io = socketIO(3000);
// this is like our global namespace

// two things our server, that can send general data to all sockets, and the socket which handles socket specific things
/* STEP 2: define server events */io.on('connection', (socket) => { // every socket will evetually hit our global connection event


  // here we can start to define socket related action on our global namespace.

  // STEP 3: defining event on general sockets this library now works much more like he events module
  socket.on('auth', (payload) => {


    // STEP 4 defining emissions to other potential sockets.
    io.emit('auth', 'payload recieved');
    socket.broadcast.emit('auth', 'only other clients should see this');
  });
});

// socket.io lets us assign speific namespaces, its initialized off of our 'io' object
/** STEP 2 id your setting up a specific namespace */let js = io.of('/js-401d36');
js.on('connection', (socket) => {

  // in memory string for rooms.
  let currentRoom = null;

  console.log('somone joined the js channel');

  socket.on('code', (payload) => {
    console.log('Server side payload', payload);

    // check if we're in a room and send a mesage to the general code event, or a specific room event
    if (!currentRoom) {
      js.emit('code', payload);
    }
    if (currentRoom) {
      js.to(currentRoom).emit('code', payload);
    }
  });

  // STEP 4.1 Optional steps for assigning rooms based on an event we defined.
  socket.on('join', room => {
    console.log('someone joined a room');
    currentRoom = room;
    socket.join(room); // defines

    // use namespace socket server.
    // js.to(room).emit(room, 'some message');
  });
})