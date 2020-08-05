"use strict";
exports.__esModule = true;
var express = require("express");
var socketio = require("socket.io");
var http = require("http");
var jest = require("jest");
console.log(jest);
var app = express();
var server = http.createServer(app);
var io = socketio(server);
app.use(express.static('./public'));
app.get('/info', function (req, res, next) {
    console.log(req.query);
    res.send('hiting our slash route');
});
io.on('connection', function (socket) {
    console.log('socket connected');
    socket.on('message', function (message) {
        console.log(message);
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