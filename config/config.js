require('dotenv').config();
module.exports = {
  development: {
    username: "root",
    password: "rlagudtjr1",
    database: "test_db",
    host: "localhost",
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
