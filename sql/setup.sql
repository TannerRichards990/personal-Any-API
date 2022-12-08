-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS rl_players;

CREATE TABLE rl_players (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    platform VARCHAR NOT NULL,
    country VARCHAR NOT NULL
  );

INSERT INTO rl_players (name, platform, country)
VALUES
  ('Rizzo', 'PC', 'USA'),
  ('FirstKiller', 'PC', 'USA'),
  ('ApparentlyJack', 'PC', 'UK'),
  ('JKnaps', 'Xbox', 'Canada'),
  ('Mawkzy', 'Playstation', 'Abu Dhabi');

DROP TABLE IF EXISTS rl_ranks;

CREATE TABLE rl_ranks (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    player VARCHAR NOT NULL,
    rank VARCHAR NOT NULL,
    hours INT NOT NULL
  );

INSERT INTO rl_ranks (player, rank, hours)
VALUES
  ('Rizzo', 'GrandChampionTwo', 6000),
  ('FirstKiller', 'SuperSonicLegend', 11000),
  ('ApparentlyJack', 'SuperSonicLegend', 13500),
  ('JKnaps', 'ChampionThree', 4500),
  ('Mawkzy', 'DiamondThree', 3000);