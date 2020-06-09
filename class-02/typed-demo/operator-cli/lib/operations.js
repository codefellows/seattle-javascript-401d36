'use strict';

// get input
const args = process.argv.slice(2); // array : [2] = anything else that was typed into the terminal?

// validate input
//  do we have a valid operator
//  do we have usable numbers
function validate(args) {
  let validOperator = false;
  let validNumbers = null;

  const operators = ['add', 'subtract', 'multiply'];
  if (operators.includes(args[0])) validOperator = true;

  // args[1] ...
  for (let i = 1; i < args.length; i++) {
    if (isNaN(parseInt(args[i]))) validNumbers = false;
  }

  if (validNumbers !== false) {
    validNumbers = true;
  }

  return validNumbers && validOperator;
}

// run the operator
// @params options: { operator: , numbers: }
function runOperation(options) {

  let result = 0;
  // forEach => we have to track a specific data tyep to return
  // map => returns
  // reduce => callack with acculmulator

  switch (options.operator) {
    case 'add':
      options.numbers.forEach(num => result += parseInt(num));
      break;
    case 'subtract':
      options.numbers.forEach(num => result -= parseInt(num));
      break;
    case 'multiply':
      options.numbers.forEach(num => result *= parseInt(num));
      break;
  }

  // return the answer
  return result;
}

module.exports = {
  args,
  validate,
  runOperation,
}


