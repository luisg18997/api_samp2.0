const appName = 'pgmodel';
const pg = require('pg');
const debug = require('debug')(appName);
const config = require('../config/config.js');

const postgres = config.postgres;
const connectionString = postgres;
const pool = new pg.Pool(connectionString);

const query = (Pgquery, callback) => {
  debug(postgres)
  const start = Date.now();
  return pool.query(Pgquery, (err, res) => {
    const duration = Date.now() - start;
    debug('executed query', { Pgquery, duration, rows: res.rowCount });
    callback(err, res);
  });
};

module.exports = {
  query,
};
