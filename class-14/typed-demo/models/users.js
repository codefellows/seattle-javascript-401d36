'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const roles = require('./roles.js');

// const roles = {
//   user: ['read'],
//   admin: ['read', 'create', 'update', 'delete'],
//   editor: ['read', 'update', 'delete'],
//   write: ['read', 'create']
// }

const secret = 'super-secret-string'

const db = {};

module.exports = {

  create: async (user) => {
    console.log(user);
    // check if user already exists
    if (db[user.username]) return 'User already exists';

    let password = await bcrypt.hash(user.password, 5)

    let userData = {
      username: user.username,
      password: password,
      role: user.role,
    }
    db[userData.username] = userData;

    return userData;
  },

  generateToken: async (user) => {
    let tokenData = {
      username: user.username,
      capabilities: roles[user.role],
    }

    let token = await jwt.sign(tokenData, secret);

    return token;
  },

  validateToken: async (token) => {
    try {
      let tokenData = await jwt.verify(token, secret);
      return tokenData;
    } catch (e) {
      return Promise.reject('jwt invalid');
    }
  }

}