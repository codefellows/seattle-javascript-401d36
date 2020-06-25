'use strict';

const user = require('../models/users');

// 
module.exports = async (req, res, next) => {
  // next ( a function ) that says, you can move on

  // bearer koajsdfah9874 807ykjbnvlhjkagf
  try {
    let token = req.headers.authorization.split(' ')[1];

    let validUser = await user.validateToken(token);

    req.user = validUser;
    next();
  } catch (e) {
    console.log(e);
    next('Token Invalid');
  }

}