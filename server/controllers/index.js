const mongoose = require('mongoose');
const lodash = require('lodash');

const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect('mongodb://localhost/Product')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));

const title = (req, res) => {
  const id = req.params.product_id.split(':').join('');
  Product.find({ product_id: id })
    .then((result) => {
      const productObj = result[0]._doc;
      console.log(productObj);
      const productInfo = lodash.omit(productObj, ['_id', '__v']);
      res.status(200).send(productInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something Broke!');
    });
};

const brand = (req, res) => {
  const brandName = req.params.brand.split(':').join('').toString();

  Product.find({ brand: brandName })
    .then((result) => {
      console.log(result);
      res.status(200).send(`brand:${result}`);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something Broke!');
    });
};
module.exports = {
  title,
  brand,
};

/* future addition - query params  - if req.params.length === 0;
req.query = id  - routes and test must change
*/
