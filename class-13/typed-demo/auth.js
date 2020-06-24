'use strict';

const express = require('express');
const users = require('./users.js');
const auth = require('./auth-middlware.js');

const app = express();
app.use(express.json());

// this route is completely unauthenticated
app.post('/signup', async (req, res) => {

  // create a user
  let password = await users.hashPassword(req.body.password);
  let userData = {
    username: req.body.username,
    password,
  }

  let newUser = await users.save(userData);

  // generate that token
  let token = await users.generateToken(newUser);

  res.send(token);
});

app.post('/signin', (req, res) => {

});

// protect this with bearer auth
app.get('/user', /** our bearer auth goes here */ auth.bearer, (req, res) => {
  res.send(users.get(req.user.username));
});

app.listen(3000, () => {
  console.log('Server up');
});