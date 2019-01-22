const appName = 'pgmodel';
const pg = require('pg');
const debug = require('debug')(appName);
const config = require('../config/config.js');
require('dotenv').config();

const connectionString = config.postgres || {
  db: process.env.UCV_FHE_SIST_POSTGRES,
  host: process.env.UCV_FHE_SIST_POSTGRES_HOST,
  port: process.env.UCV_FHE_SIST_POSTGRES_PORT,
  database: process.env.UCV_FHE_SIST_POSTGRES_NAME,
  user: process.env.UCV_FHE_SIST_POSTGRES_USER,
  password: process.env.UCV_FHE_SIST_POSTGRES_PASSWORD,
};
const pool = new pg.Pool(connectionString);


const query = (Pgquery, callback) => {
  debug('pool: ', pool);
  const start = Date.now();
  return pool.connect((err, client, release) => {
    if (err) {
      debug('error not connect client');
      callback(err, null);
    } else {
      client.query(Pgquery, (errquery, res) => {
        release();
        if (errquery) {
          debug('error in the query: ', Pgquery);
        } else {
          const duration = Date.now() - start;
          debug('executed query', { Pgquery, duration });
        }
        callback(errquery, res);
      });
    }
  });
};


module.exports = {
  query,
};
