const { mySQLUserName, mySQLKey } = require('../keys.js');

const { Sequelize, DataTypes } = require ('sequelize');
const db = new Sequelize('google_shopping', mySQLUserName, mySQLKey, {
  dialect: 'mysql',
})

db.authenticate()
  .then((err) => {
    console.log('Boooyah! mySQL DB instance created!');
  })
  .catch((err) => {
    console.log('DB instance creation error:', err);
  });

const Product = db.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  description: DataTypes.STRING(1500),
  title: DataTypes.STRING,
  brand: DataTypes.STRING,
  category_name: DataTypes.STRING,
  age_category: DataTypes.STRING(25),
  player_Count: DataTypes.STRING(15),
  part_Number: DataTypes.STRING(25),
  GTIN: DataTypes.INTEGER(25),
},
{
  timestamps: false,
  createdAt: false
});

Product.sync({ force: true })
  .then(() => {
      console.log('Product table created!');
      db.close();
    }
  );
