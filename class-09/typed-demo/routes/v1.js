'use strict'

// this router dynamically handles model logic based on parameter attached to the request

const express = require('express');
const router = express.Router();


const breadSchema = require('../models/bread-schema.js');
const toadSchema = require('../models/toad-schema.js');
const Mongo = require('../models/mongo.js');

// define some parameter middleware
// we can look for a specific parameter in a route, and modify the request object
// In this way we can communicate handler that are next in the request "list"

function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
    case 'bread':
      req.model = new Mongo(breadSchema);
      next();
      break;
    case 'toad':
      req.model = new Mongo(toadSchema);
      next();
      break;
    default:
      next('Invalid Model');
      break;
  }
}

router.param('model', getModel);

router.get('/:model', getAll);
router.post('/:model', createOne);

function getAll(req, res) {
  req.model.get()
    .then(results => res.send(results))
    .catch(err => res.send(err));
}

function createOne(req, res) {
  req.model.create(req.body)
    .then(results => res.send(results))
    .catch(err => res.send(err));
}

module.exports = router;
