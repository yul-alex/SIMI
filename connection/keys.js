const { config } = require("dotenv");

config();

const configDB = {
  connectionLimit: 20,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  
};

module.exports = {
  configDB
};