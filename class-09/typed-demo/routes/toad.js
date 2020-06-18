'use strict';

const express = require('express');
const toadSchema = require('../models/toad-schema.js');
const Mongo = require('../models/mongo.js');
const ToadModel = new Mongo(toadSchema);

const router = express.Router();

router.get('/', (req, res) => {
  ToadModel.get()
    .then(results => res.send(results))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  ToadModel.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

module.exports = router;