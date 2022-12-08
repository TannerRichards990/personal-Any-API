const pool = require('../utils/pool');
module.exports = class RlRanks {
  constructor(row) {
    this.id = row.id;
    this.player = row.player;
    this.rank = row.rank;
    this.hours = row.hours;
  }

  static async getAllRanks () {
    const { rows } = await pool.query('SELECT * FROM rl_ranks');
    return rows.map(row => new RlRanks(row));
  }

  static async getPlayerById (id) {
    const { rows } = await pool.query('SELECT * FROM rl_ranks WHERE id=$1', [id]);
    return new RlRanks(rows[0]);
  }
};
