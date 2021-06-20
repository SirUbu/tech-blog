// import sequelize construction
const Sequelize = require('sequelize');

// configure environment variables
require('dotenv').config();

// create connection to db, pass in MySQL from .env or use JAWSDB if in Heroku
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

// export server sequelize connection
module.exports = sequelize;