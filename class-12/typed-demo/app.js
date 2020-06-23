'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const oauth = require('./oauth-middleware.js');

const app = express();
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.get('/oauth', oauth, (req, res) => {
  console.log(req.user);
  res.cookie('token', req.token);
  res.header('token', req.token);
  res.send({ user: req.user, token: req.token });
})


app.listen(3000, () => {
  console.log('auth server up');
});

