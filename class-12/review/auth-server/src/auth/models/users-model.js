'use strict';

// This sets up a User class that uses the schema from users-schema.js
/**
 * Users class
 * @module users-model
 */



const schema = require('./users-schema.js');
const Model = require('./mongo-interface.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let SECRET = 'secretvalidationstring';

class User extends Model {

  constructor() {
    super(schema);
  }


  static hashPassword(password) {
    return bcrypt.hash(password, 5);
  }

  static async authenticateUser(username, password) {
    //code goes here
    try {

      // search for the user that the request is looking for
      let users = await schema.find({ username });

      // see if the users password matches the password passed into signin route
      let authorized = await bcrypt.compare(password, users[0].password);
      if (authorized) {
        return users[0];
      } else {
        return false;
      }
    } catch (e) {
      console.error('ERROR :: ', e);
      return false;
    }
  }

  // is username and object or a string?
  static generateToken(username) {
    let token = jwt.sign(username, SECRET);
    return token;

    //Notes:
    //generate token based off of username:password
  }

}

module.exports = User;