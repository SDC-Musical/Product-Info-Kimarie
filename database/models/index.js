const mysql = require('mysql');
const { mySQLUserName, mySQLKey } = require('../keys.js');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '52.53.165.47',
  user: mySQLUserName,
  password: mySQLKey,
  database: 'google_shopping',
});

const create = (product, callback) => {
 pool.query(
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
  pool.query(`SELECT * FROM products WHERE ${selector[0]} = ?`, [selector[1]], (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const update = (selector, callback) => {
  pool.query(`UPDATE products SET ${selector.field} = ? WHERE id = ?`, [selector.updateInfo, selector.id], (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  })
}

const remove = (selector, callback) => {
  pool.query(`DELETE FROM products WHERE ${selector.field} = ?`, [selector.fieldValue], (error, result) => {
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
