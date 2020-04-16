require('dotenv').config()
// {
//   "development": {
//     "username": "root",
//     "password": "password",
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": "password",
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DEV_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_TEST_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  }
}