'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const error = require('./middleware/error.js');
const app = express();

// bread path
const bread = [];
const toads = [];

// using middleware for every available method, can still add a path but not required;
app.use(express.json()); // this is a built in middleware function that can parse json in a request.body
app.use(logger);

app.get('/bread', (request, response) => {

  console.log('bread route hit', request.path, request.method, request.headers, request.body);
  // this should happend
  response.send({ bread });
  // anything after the response happens, but our client is missing out
});

app.post('/bread', /* express.json(), we can also put this here for one single route */(request, response, next) => {

  console.log(request.body);
  response.send(request.body);
})

// toad

app.get('/toad', (requests, response) => {

  console.log('toad route hit');
  response.send({ toads });
});

// put catch all middleware at the bottom
app.use(error);
app.use((request, response) => {
  response.status(404).send('cannot ' + request.method + ' ' + request.path);
});

module.exports = app;