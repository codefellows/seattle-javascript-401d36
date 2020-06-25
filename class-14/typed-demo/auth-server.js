'use strict';

const express = require('express');
const morgan = require('morgan');

const users = require('./models/users.js');
const bearer = require('./middlewares/bearer.js');
const acl = require('./middlewares/acl.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/signup', async (req, res) => {

  let userCredentials = req.body; // username, password, role
  let newUser = await users.create(userCredentials); // cerate a user in our db?
  let token = await users.generateToken(newUser); // generate a token to send to our new user
  res.cookie('token', token);
  res.set('token', token);
  res.send(token);

});
app.post('/signin');

// we've got a beefy route
app.get('/users', bearer, acl('read'), (req, res) => {

  console.log(req.user, 'who youve got permission!');
  res.send('Nice work, heres some cheese');

});

app.post('/edit', bearer, acl('update'), (req, res) => {
  // update stuff here
  res.send('youre clearly and editor');
});

app.listen(3000, () => {
  console.log('Auth server up');
});