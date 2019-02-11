const appName = 'pgmodel';
const { Pool } = require('pg');
const debug = require('debug')(appName);
const config = require('../config/config.js');
require('dotenv').config();

const connectionString = config.postgres;
const pool = new Pool(connectionString);


const query = (Pgquery, callback) => {
  try {
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
            callback(errquery, null);
          } else {
            const duration = Date.now() - start;
            debug('executed query', { Pgquery, duration });
          }
          callback(errquery, res);
        });
      }
    });
  } catch (e) {
    debug('error catch in the funcion query of pgmodel: ', e);
    return callback(e, null);
  }
};


module.exports = {
  query,
};
