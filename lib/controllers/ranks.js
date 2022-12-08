const { Router } = require('express');
const RlRanks = require('../models/ranksModel');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const rlRanks = await RlRanks.getAllRanks();
      res.send(rlRanks);
    } catch (err) {
      next(err);
    }
  });
