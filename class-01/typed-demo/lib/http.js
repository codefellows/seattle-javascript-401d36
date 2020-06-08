'use strict';

// want use the input to make an HTTP request.
function fetch(opts) {
  if (opts) {
    console.log(`Fetching from ${opts.url}`);
    console.log(`Method: ${opts.method}`);
  }
}

module.exports = fetch;
