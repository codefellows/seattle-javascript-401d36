'use strict';

let time = new Date();
let timestamp = time.toTimeString();
let datestamp = time.toDateString();

module.exports = {
  t: timestamp,
  d: datestamp
}
