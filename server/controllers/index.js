const lodash = require('lodash');

const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const title = (req, res) => {
  const id = req.params.product_id.split(':').join('');
  Product.find({ product_id: id })
    .then((result) => {
      // eslint-disable-next-line no-underscore-dangle
      const productObj = result[0]._doc;
      // testing purposes: console.log(productObj);
      const productInfo = lodash.omit(productObj, ['_id', '__v']);
      res.status(200).send(productInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: 'Something Broke!' });
    });
};

const brand = (req, res) => {
  const brandName = req.params.brand.split(':').join('').toString();

  Product.find({ brand: brandName })
    .then((result) => {
      // testing purposes: console.log(result[0]);
      // eslint-disable-next-line no-underscore-dangle
      const brandObj = result.map((item) => item._doc);
      const brandInfo = [];
      for (let i = 0; i < brandObj.length; i + 1) {
        brandInfo.push(lodash.omit(brandObj[i], ['_id', '__v']));
      }

      res.status(200).send(brandInfo);
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
