const pg = require('pg');
const debug = require('debug');
const config = require('../config/config.js');

const postgres = config.postgres;
const connectionString = process.env.DATABASE_URL || postgres;
const pool = new pg.Pool(connectionString);

module.exports.connection = () => {
  pool.connect((err, client, release) => {
    if (err) {
      debug(err.stack);
    } else {
      pool.client(() => {
        release();
        if (err) {
          debug(err.stack);
        }
      });
      debug('connect with db');
    }
  });
};
