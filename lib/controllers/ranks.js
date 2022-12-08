const { Router } = require('express');
const RlRanks = require('../models/rankModel');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const rlRanks = await RlRanks.getAllRanks();
      res.send(rlRanks);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const rlRanks = await RlRanks.getPlayerById(req.params.id);
      res.send(rlRanks);
    } catch (err) {
      next(err);
    }
  });
