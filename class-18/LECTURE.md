# Class 18

## Project Discussion

- What do you guys think
  - 6 person team vs 3 person team?

### Brooke's Project Pitch

- Habit Building API
- User subscribes to this API service. Think of this like a signup route.
- API responds (text or email notification) once a day (ideally in the morning)
- User responds via the prompt, from a list of options sent in the call to action.
  - Randomly chooses something from a pool of resources.
  - Brook has a list of resources to use ( revolving around social justice and racial equality ).
- After User completes whatever task was prompted, User confirms with the app that the task is done.
- The API responds with a congratulations + your on a 10 day streak, keep it UP!!

### Other Projects

- Paul:
  - Session App: medical marijuana tracking application, track sessions ( personal quality and experience ) and products.
  - Social Justice Pokemon Go: Geolocation app that tracks all location where socially significant "events" occur in the media.
    - Get a notification if you are close, get information about the event on your phone.
- Garhett: Upwork for legal teams. ( what sort of legal freelance things are available already )

### Come Back to Discuss

- Possibly Brookes app with a 6 person team.

## Code Review

- Lab 17: taking our tracking events and adding some TCP functionality. 
  - Thanks Paul for the Code!

## WebSockets

- Yesterday we created a TCP server, and we made these things called sockets, which allows data to be transfers to a server.
- Today, we learning a specific web API ( run in a browser )
  - TCP server was a lower level connection type.
  - We have more work ourselves to manage our connections = is data coming in? or am I sending data?
- Websockets are built on top of HTTP
  - Initializing one starts with an HTTP request, we ask our connectino to be upgraded:
    - A full-duplex communication system ( monitor incoming and outgoing data ).
    - `http://localhost:3000` <=> `ws:localhost:3000`
  - This protocol is supported by web browser.

## Socket.io

- Is not web sockets, it just uses web sockets.
- There is a completely different library for client stuff;
  - socket.io-client

```js

const socketIO = require('socket.io');

// all we need here is to start a socket server
const io = socketIO(3000);

io.on('connection', (socket) => {
  console.log(socket);

  // this library now works much more like he events module
  socket.on('auth', handleAuth);
});

// client side

const io = require('socket.io-client');

io.connect(3000, 'localhost', () => {
  console.log('client socket connected');
})

io.emit('auth', {name: "Jacob", role: "instructor"});

io.on('auth', (payload) => {
  console.log(payload);
});

```
