'use strict';

// Module that contains the routes and the callback functions for the routes

/**
 * Router module
 * @module router
 */


const express = require('express');
const auth = require('./middleware/basic.js');
const router = express.Router();
const UserModel = require('./models/users-model.js');
const User = new UserModel();

router.post('/signup', signupFunction);
router.post('/signin', auth, signInFunction);
router.get('/users', getUsers);
// router.get('/oauth', handleOauth);


async function signupFunction(request, response) {

  let userExists = await User.exists({ username: request.body.username });
  if (userExists) {
    response.send('user already exists');
    return;
  }

  let password = await UserModel.hashPassword(request.body.password);
  let newUser = await User.create({ username: request.body.username, password: password });
  if (newUser) {
    let token = UserModel.generateToken({ username: request.body.username })
    // console.log(UserModel.generateToken({ username: request.body.username }));
    console.log(token);
    response.cookie('token', token);
    response.header('token', token);
    response.send('user was signed up');
  } else {
    response.status(403).send('user invalid');
  }

  //Notes: 
  // requires a token and user to sign them up
  // req.token, req.user, res.set, res.cookie, res.send
}

function signInFunction(request, response) {
  if (request.user) {
    let token = UserModel.generateToken({ username: request.user.username })
    console.log('user was signed in');
    // Notes: 
    // res.cookie, res.send
    response.cookie('token', token);
    response.header('token', token);
    response.send({ token, user: request.user });
  } else {
    response.status(403).send('Invalid');
  }
}

async function getUsers(request, response) {
  let userQuery = await User.get();
  response.send(userQuery);
}


module.exports = router;