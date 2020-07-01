'use strict';

/**
 * Main Hub Application
 * 
 * Manages the state of every package
 * Logs every event to the console with a timestamp and payload
 * 
 */
require('dotenv').config('../.env');
const EventEmitter = require('events');
const events = new EventEmitter();
const net = require('net');

const PORT = process.env.PORT || 3000;
const server = net.createServer();

const socketPool = {};

server.on('connection', (socket) => {
  const id = Math.floor(Math.random() * 100000000);
  socketPool[id] = socket;
  console.log(`Connection established at:: ${id}`);
  socket.on('error', (e) => console.log(e));
  socket.on('end', () => { delete socketPool[id]; });
  socket.on('data', handleMessage);
});

server.on('error', (e) => {
  console.log(`SERVER ERROR found at ${e}`);
});

// Pickup Event
// events.on('pickup', handlePickup);

// function handlePickup(payload){
//   events.emit('cache-update', payload);
//   events.emit('package-ready-for-delivery', payload);
// }

// In-Transit Event
// events.on('inTransit', handleInTransit);

// function handleInTransit(payload){
//   events.emit('cache-update', payload);
// }

// // Delivered Event
// events.on('delivered', handleDelivered);

// function handleDelivered(payload){
//   events.emit('cache-update', payload);
// }


// Cache Logger
// events.on('cache-update', logger);


function handleMessage(buffer) {
  let message = JSON.parse(buffer.toString());
  console.log('cap server message', message);
  if (message.event && message.payload) {
    logger(message.payload);
    for (let socket in socketPool) {
      socketPool[socket].write(JSON.stringify(message));
    }
  }
}


function logger(payload) {
  let time = new Date();
  console.log({
    Event:
    {
      time: `${time}`,
      payload: payload,
    }
  },
  );

}

server.listen(PORT, () => {
  console.log('Server Running!');
});

module.exports = events;