const pool = require('../utils/pool');
module.exports = class RlGame {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.name = row.platform;
    this.country = row.country;
  }

  static async getAllPlayers () {
    const { rows } = await pool.query('SELECT * FROM rl_players');
    return rows.map(row => new RlGame(row));
  }

  static async getPlayerById (id) {
    const { rows } = await pool.query('SELECT * FROM rl_players WHERE id=$1', [id]);
    return new RlGame(rows[0]);
  }
};

