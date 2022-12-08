const { Router } = require('express');
const RocketLeague = require('../models/rlModel');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const rocketLeague = await RocketLeague.getAllPlayers();
      res.send(rocketLeague);
    } catch (err) {
      next(err);
    }
  });

