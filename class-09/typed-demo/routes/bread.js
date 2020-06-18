'use strict';

const express = require('express');
const breadSchema = require('../models/bread-schema.js');
const Mongo = require('../models/mongo.js');
const BreadModel = new Mongo(breadSchema);

const router = express.Router();

router.get('/', (req, res) => {
  BreadModel.get()
    .then(results => res.send(results))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  BreadModel.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

module.exports = router;