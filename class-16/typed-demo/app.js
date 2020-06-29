'use strict';

const events = require('./lib/events.js');

require('./lib/logger.js');
require('./lib/save-one.js');

events.emit('save', { id: 100, name: 'Jacob' });