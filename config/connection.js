// load sequelize and environment variable
const Sequelize = require('sequelize');
require('dotenv').config();

// create sequelize instance
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      process.env.DB_HOST,
      process.env.DATABASE,
      process.env.PORT,
      {
        dialect: 'mysql'
      }
    );
  }
  
  module.exports = sequelize;