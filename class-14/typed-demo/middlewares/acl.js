'use strict';

// function currying

// function curried(arg1) {
//   return function(args1, args2) {

//   }
// }

// let myCurriedFunction = curried(1);

// myCurriedFunction(1,2)

module.exports = (capability) => (req, res, next) => {
  if (req.user.capabilities.includes(capability)) {
    next();
  } else {
    next('Permission Denied');
  }
} 