'use strict';

// file concerned is seeting express
const express = require('express');
const cors = require('cors');

// const breadRouter = require('../routes/bread.js');
// const toadRouter = require('../routes/bread.js');
const v1 = require('../routes/v1.js');

const app = express();

// parses requests bodies as json and attaches the data to the request.body
app.use(express.json());
app.use(cors());

// app.use('/bread', breadRouter);
// app.use('/toad', toadRouter);
app.use('/api', v1);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server running on :: ' + port);
    });
  }
}