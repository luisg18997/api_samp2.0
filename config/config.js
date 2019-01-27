require('dotenv').config();

const config = {
  postgres: {
    user: process.env.UCV_FHE_SIST_POSTGRES_USER,
    host: process.env.UCV_FHE_SIST_POSTGRES_HOST,
    database: process.env.UCV_FHE_SIST_POSTGRES_NAME,
    password: process.env.UCV_FHE_SIST_POSTGRES_PASSWORD,
    port: process.env.UCV_FHE_SIST_POSTGRES_PORT,
  },
};

module.exports = config;
