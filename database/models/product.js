const mongoose = require('mongoose');

const product = new mongoose.Schema({
  product_id: Number,
  description: String,
  title: String,
  brand: String,
  category: {
    name: String,
    age: String,
    player_Count: String,
  },

  specs: {
    part_Number: String,
    GTIN: Number,
  },

});

module.exports.Product = mongoose.model('Product', product);
