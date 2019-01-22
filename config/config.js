require('dotenv').config();

const config = {
  postgres: {
    db: process.env.UCV_FHE_SIST_POSTGRES,
    host: process.env.UCV_FHE_SIST_POSTGRES_HOST,
    port: process.env.UCV_FHE_SIST_POSTGRES_PORT,
    database: process.env.UCV_FHE_SIST_POSTGRES_NAME,
    user: process.env.UCV_FHE_SIST_POSTGRES_USER,
    password: process.env.UCV_FHE_SIST_POSTGRES_PASSWORD,
  },
};

module.exports = config;
