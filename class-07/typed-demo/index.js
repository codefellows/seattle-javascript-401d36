'use strict';

// import a server and start it
const server = require('./lib/server.js');

// const PORT = process.env.PORT || 3000;

server.listen(3000, () => {
  console.log('Server is up on port :: 3000');
});