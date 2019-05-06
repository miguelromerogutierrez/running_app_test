require('dotenv').config();
module.exports = {
  hostname: 'localhost',
  port: 3000,
  viewDir: './app/views',
  env: 'development',
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
};
