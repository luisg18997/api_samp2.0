const appName = 'pgmodel';
const pg = require('pg');
const debug = require('debug')(appName);
const config = require('../config/config.js');

const postgres = config.postgres;
const connectionString = postgres;
const pool = new pg.Pool(connectionString);

const query = (text, params, callback) => {
  const start = Date.now()
  return pool.query(text, params, (err, res) => {
    const duration = Date.now() - start
    debug('executed query', { text, duration, rows: res.rowCount })
    callback(err, res);
  });
}

module.exports = {
  query
}
