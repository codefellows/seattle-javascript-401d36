'use strict';

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

// handles all user actions
const db = {};
const secret = 'shhhhhh';


module.exports = {
  save: async (data) => {

    db[data.username] = data;

    return data;
  },

  get: (username) => {
    if (username) {
      return db[username];
    } else {
      let results = [];

      for (let user in db) {
        results.push(db[user]);
      }

      return results;
    }
  },

  generateToken: async (user) => {
    return jwt.sign(user, secret);
  },

  hashPassword: async (password) => {
    return bcrypt.hash(password, 5);
  },


  validateToken: async (token) => {

    // try catch allows us to capture an error 
    try {

      // inside these, if any error occurs it gets passed to catch

      let user = await jwt.verify(token, secret);
      return user;

    } catch (e) {

      return false

    }
  }
}