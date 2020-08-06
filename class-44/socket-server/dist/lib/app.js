"use strict";
exports.__esModule = true;
var express = require("express");
var socketio = require("socket.io");
var http = require("http");
// Our app from express
var app = express();
// our http server, that the socket server can comsume.
var server = http.createServer(app);
// Our socket event handler for our server.
var io = socketio(server);
app.use(express.static('./public'));
var messages = {
    data: [],
    count: 0
};
// hopefully familiar territory
app.get('/info', function (req, res, next) {
    console.log(req.query);
    res.send('hiting our slash route');
});
// Creating an handler for socket connections
io.on('connection', function (socket) {
    // whenever a server recieves a connection, we execute this code block
    console.log('socket connected');
    // we have a handler specific to a connected socket
    socket.on('message', function (message) {
        console.log(message);
        messages.data.push(message);
        io.emit('message', messages.data);
    });
});
exports["default"] = {
    start: function (port) {
        server.listen(port, function () {
            console.log('App running');
        });
    }
};
//# sourceMappingURL=app.js.map