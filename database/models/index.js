// const { query } = require('mysql');
// const db = require('../../server/index.js');

const mysql = require('mysql');
const { mySQLUserName, mySQLKey } = require('../keys.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: mySQLUserName,
  password: mySQLKey,
  database: 'google_shopping',
});

db.connect(err => {
  if (err) {
    console.log('Error establishing mySQL DB connection:', err);
  } else {
    console.log('mySql DB connection successful!');
  }
});

const readOne = (selector, callback) => {
  db.query(`SELECT * FROM products WHERE ${selector[0]} = ?`, [selector[1]], (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  readOne,

}
