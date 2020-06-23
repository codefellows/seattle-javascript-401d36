'use strict';

const base64 = require('base-64');

const UserModel = require('../models/users-model.js');
//does the authentication like in class example

module.exports = async function authMiddleware(req, res, next) {

  // strings from our auth header
  let [authtype, authString] = req.headers.authorization.split(' ');
  let [username, password] = base64.decode(authString).split(':');

  // let verified = users[username] ? await bcrypt.compare(password, users[username].password) : false;
  let user = await UserModel.authenticateUser(username, password);

  if (user) {
    req.user = user;
    next();
  } else {
    next('Invalid login');
  }

  return 0;
}