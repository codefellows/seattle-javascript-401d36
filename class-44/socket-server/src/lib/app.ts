import * as express from 'express';
import * as socketio from 'socket.io';
import * as http from 'http';

// Our app from express
const app: express.Application = express();

// our http server, that the socket server can comsume.
const server: http.Server = http.createServer(app);

// Our socket event handler for our server.
const io: socketio.Server = socketio(server);

app.use(express.static('./public'));


// our first interface for a payload!
//   classes for varibles??
//   contract for a group of data type.
interface Payload {
  createdAt: string;
  text: string;
}

// we define a contract for messageData
interface MessageData {
  data: Payload[],
  count: number,
}

const messages: MessageData = {
  data: [],
  count: 0
};

// hopefully familiar territory
app.get('/info', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  console.log(req.query);
  res.send('hiting our slash route');
});


// Creating an handler for socket connections
io.on('connection', (socket: socketio.Socket): void => {

  // whenever a server recieves a connection, we execute this code block
  console.log('socket connected');

  // we have a handler specific to a connected socket
  socket.on('message', (message: Payload): void => {
    console.log(message);
    messages.data.push(message);

    io.emit('message', messages.data);
  });
});

export default {
  start: (port: number): void => {
    server.listen(port, (): void => {
      console.log('App running');
    });
  },
}