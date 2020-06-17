'use strict';

const express = require('express');
// const BreadSchema = require('../../models/bread/bread-schema.js');
const BreadModel = require('../../models/bread/bread-model.js');
const Bread = new BreadModel();

const router = express.Router();

router.get('/', handleGetAllBread);
router.get('/:id', handleGetBreadById);
router.post('/', handleCreateBread);


async function handleGetAllBread(req, res) {
  const results = await Bread.get()
  res.send(results);
  // BreadSchema.find()
  //   .then(results => res.send(results))
  //   .catch(err => res.send(err));
  // res.send('getting all bread');
}

function handleGetBreadById(req, res) {
  const breadId = req.params.id;
  Bread.get(breadId)
    .then(results => console.log(results))
    .catch(err => console.log(err));
  res.send('finding bread with id : ' + breadId);
}

function handleCreateBread(req, res) {
  Bread.create(req.body)
    .then(results = res.send(results))
    .catch(err => res.send(err));
  // const newBread = new BreadSchema(req.body);
  // newBread.save()
  //   .then(results => res.send(results))
  //   .catch(err => res.send(err));
}

module.exports = router;