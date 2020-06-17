'use strict';

const express = require('express');
const breadRouter = require('./routes/bread-router.js');
// const toadRouter = require('./toad-router.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my API, use these routes please: <br> /bread <br> /toad');
})

app.use('/bread', breadRouter);
// app.use('/toads', toadRouter);

// express lets us define this outside of an app instance; express.Router()
// app.get('/bread', () => {})
// app.get('/toads')
// app.get('/potatoe')

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running :: ' + port);
    });
  },
}