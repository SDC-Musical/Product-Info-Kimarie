const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Product', {
  useMongoClient: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error ');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const product = mongoose.Schema({
  product_Id: Number,
  description: {
    language: String,
    value: String,
  },
  title: String,
  brand: [{
    id: Number,
    name: String,
  }],
  category: {
    id: Number,
    name: String,
    age: String,
    player_Count: [String],
  },

  specs: {
    part_Number: [String],
    GTIN: Number,
  },

});

module.exports = mongoose.model('Product', product);
