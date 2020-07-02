# Class 19

## Warm Up

- One group to create a socket server (using socket.io).
  - one namespace, "js401',
  - Ability to create one of two rooms,
    - daytime,
    - nighttime,
  - Handler 'message' event, which will emit an incoming to all connected sockets.

- Another group can create a client,
  - connect to our js401 namespace,
    - enter one of the two rooms.
  - Can emits a message.
  - And handle incoming message.

- Jacob builds his own client.

## Code Review

- holistic review of our CAPS application.
- Testing our servers / clients.
- How far emits can go.
  - Vendor and data cache init, doesn't initialize properly.
  - Modules don't seem to talk well together.
- Mongo?? Let's see if we have time (Atlas).

## Message Queuing system

- Socket.io server queuing.
- We have a server that can through messages out to any client that is CURRENTLy connected,
  - what about if we want those messages later
    - Vendor emits order ready events => driver is not connected
      - Server emits an 'orderReady' if no other clients are connected no handler is online to receive

- Simple queueing system that allows our distibuted system to receive messages from previously emitted events.

```js

// FIFO queue is doable, but a lot of work to test and integrate.
// let's just build a data structure to store things by id / namespace / room.


// when our client sees a messagem it sends a recaipt, ( I've seen the message, you can remove )
const queue = {
  roomName : {
    clientId: {
      messageId: 'some message',
      messageId: 'some other message',
    }
  },
  newRoom: {
    clientId: {
      messageId: 'new room message',
    },
  }
}

queue[room][clientId][messageid];
```
