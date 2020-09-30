Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var product = new Schema({
  product_Id: Number,
  description: {
    language: String,
    value: String
  },
  title: String,
  brand: [{
    id: Number,
    name: String
  }],
  category: {
    id: Number,
    name: String,
    age: String,
    player_Count: [String]
  },

  specs: {
   part_Number: [String],
    GTIN: Number,
  }


});


module.exports = mongoose.model('Product', product);

// secondary way is to create a schema for the array so we do not have an empty array default
// var part_number = new Schema({
//   ids: String
// });
// var videoUrl = new Schema({
//   url: String
// });

// var player = new Schema({
//   description: String
// });