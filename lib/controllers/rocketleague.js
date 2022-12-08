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
  })

  .get('/:id', async (req, res, next) => {
    try {
      const rocketLeague = await RocketLeague.getPlayerById(req.params.id);
      res.send(rocketLeague);
    } catch (err) {
      next(err);
    }
  });



