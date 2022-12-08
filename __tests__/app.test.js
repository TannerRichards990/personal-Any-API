const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const rlGame = require('../lib/models/rlModel');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/rocket league should render a list of all osu players', async () => {
    const res = await request(app).get('/rocketleague');
    const allPlayers = await rlGame.getAllPlayers();
    const expected = allPlayers.map((rocketleague) => {
      return {
        id: rocketleague.id,
        name: rocketleague.name,
        platform: rocketleague.platform,
        country: rocketleague.country,
      };
    });
    expect(res.body).toEqual(expected);
  });

  it('/rocketleague/:id should render a single rl player', async () => {
    const res = await request(app).get('/rocketleague/1');
    const singlePlayer = await rlGame.getPlayerById(1);
    const expected = {
      id: singlePlayer.id,
      name: singlePlayer.name,
      platform: singlePlayer.platform,
      country: singlePlayer.country,
    };
    expect(res.body).toEqual(expected);
  });
  

  


  afterAll(() => {
    pool.end();
  });
});
