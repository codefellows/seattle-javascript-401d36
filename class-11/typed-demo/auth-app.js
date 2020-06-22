'use strict';

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
let SECRET = 'secretvalidationstring';

const users = {};

async function authMiddleware(req, res, next) {

  // strings from our auth header
  let [authtype, authString] = req.headers.authorization.split(' ');

  // let authType = basicAuth[0];
  // let authString = basicAuth[1];

  // define two variabless based on the position of the returning
  // let username = base64.decode(authString)[0];
  // let password = base64.decode(authString)[1];
  let [username, password] = base64.decode(authString).split(':');

  let verified = users[username] ? await bcrypt.compare(password, users[username].password) : false;

  if (verified) {
    req.user = users[username];
    next();
  } else {
    next('Invalid login');
  }

  return 0;
}

// route for creating new users
app.post('/signup', async (req, res) => {
  let user = req.body;

  // does the user already exist?
  if (!users[user.username]) {
    // if not make one
    user.password = await bcrypt.hash(user.password, 10); // save our password but hashed

    users[user.username] = user;

    // create a token
    let token = await jwt.sign({ username: user.username }, SECRET /* something to sign our token with */);

    console.log('signup success');
    res.status(200).send(token);
  } else {
    res.status(403).send('That username is already taken');
  }

});

app.post('/signin', authMiddleware, async (req, res) => {
  if (req.user) {
    let token = await jwt.sign({ username: req.user.username }, SECRET /* something to sign our token with */);
    res.send(token);
  } else {
    res.status(403).send('Invalid');
  }
  // let basicAuth = req.headers.authorization.split(' ');

  // // let authType = basicAuth[0];
  // // string from our auth header
  // let authString = basicAuth[1];

  // console.log(base64.decode(authString));

  // // define two variabless based on the position of the returning
  // // let username = base64.decode(authString)[0];
  // // let password = base64.decode(authString)[1];
  // let [username, password] = base64.decode(authString).split(':');

  // let verified = users[username] ? await bcrypt.compare(password, users[username].password) : false;

  // if (verified) {
  //   let token = await jwt.sign({ username }, SECRET /* something to sign our token with */);

  //   console.log('successful sign in');
  //   res.send(token);
  // } else {
  //   res.status(403).send('Invalid Credentials');
  // }

});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Auth server listening');
});