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

const create = (product, callback) => {
 db.query(
  `INSERT INTO products (description, title, brand, category_name, age_category, player_Count, part_Number, GTIN)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [product.description, product.title, product.brand, product.category, product.age, product.player, product.part, product.GTIN], (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const read = (selector, callback) => {
  db.query(`SELECT * FROM products WHERE ${selector[0]} = ?`, [selector[1]], (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const update = (selector, callback) => {
  db.query(`UPDATE products SET ${selector.field} = ? WHERE id = ?`, [selector.updateInfo, selector.id], (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  })
}

const remove = (selector, callback) => {
  db.query(`DELETE FROM products WHERE ${selector.field} = ?`, [selector.fieldValue], (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
}

module.exports = {
  create,
  read,
  update,
  remove,
}
