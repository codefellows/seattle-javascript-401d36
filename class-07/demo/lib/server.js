'use strict';

const express = require('express');
const loggerMiddleware = require('./logger.js');

const app = express();

app.use(loggerMiddleware);

app.get('/test', (req, res) => {
  res.send('test route hit');
});

module.exports = app;