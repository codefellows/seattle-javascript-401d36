'use strict';

const operations = require('./lib/operations.js');

// {args, validate, runOperation}

if (operations.validate(operations.args)) {
  console.log(
    operations.runOperation(
      {
        operator: operations.args[0],
        numbers: operations.args.slice(1)
      }
    )
  );
} else {
  console.log(' Please provide valid command line arguments');
}
