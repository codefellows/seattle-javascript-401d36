# Class 17

## Code Review

- Creating A delivery notification system (CAPS).
- Marlene: getting setInterval()
  - setInterval => object
  
```js
let myInterval = setInterval(() => {
  // do things you want to repeat;
}, 3000);

clearInterval(myInterval); // run this when you want to stop running code in a time interval
```

## TCP

- Transmission Control Protocol
  - Just another protocol, establishes rules for creating and maintaining a connection between machines.
  - HTTP sits above TCP in the OSI Model
    - HTTP Uses TCP protocol to make requests and responses.
    - HTTP only deals with a short connection time (request -> response -> end)
    - TCP only connections, establish a connection and maintain it until an event occurs or a machine is interupted.
      - We're going to start thinking: instead of `client` and `server` => `socket` and a `server`.
      - We can have muliple simultaneous connections. We have to "maintian" our connections.\
      - connections will last until we tell them to end.
  - IP: internet protocol - dictates how to pass data packages bakc and forth.
  - Events: TCP has it's own connection events that we want to plus into.
    - data: packets are being transmitted across our maitained connection
    - error: we have a connection or transmission error.
    - connect / disconnect: a machine has established / un-established a connection to our server.


## Node Net Module

- Create and Connect to a TCP server
- We're going to be forced to think of our data as binary buffers.
  - Often times theirs too much information to encode efficiently
  - We use binary data to send packets across a TCP connection.

```js

const net = require('net');

// are we a server of a socket

// SERVER CODE

// Publisher
const server = net.createServer();

server.on('connection', (socket) => {

  // we are managing a little bit of state.
  console.log(`A new connection established: ${socket.id}`);

  // our server stores this socket in memory, so our server state has updated.

  socket.on('data', (paylaod) => {
    console.log(payload);
  });

  socket.on('error', (error) => {
    // inform admins / other sockets that a connection issue has happened.
  });
});

server.listen(() => console.log('server up')) // open up our connection , probably with a callback

/// ....

// inversely, if we are a socket (THIS IS ON ANOTHER MACHINE)
// SOCKET CODE... subscriber
const connection = new net.Socket(options) // what server url are we connecting to / various config optionss

```
## Demo

- Creating a distrbuted system of:
  - Chat Server
  - Chat Client ( we can resue this for any number of machines )
  - Logger: a utility for loggging activity.