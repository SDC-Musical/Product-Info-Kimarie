const lodash = require('lodash');
const Products = require('../../database/models/index.js');

const title = (req, res) => {
  const id = req.params.product_id.split(':').join('');
  const selector = ['id', id];
  Products.readOne(selector, (err, result) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send(result[0].title);
    }
  })
}

// brand route is broken....
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
      console.log(brandInfo);
      res.status(200).send(brandInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something Broke!');
    });
};

const create = (req, res) => {
  let productObject = {
    product_id: 37,
    description: 'I used CRUD to recreate this product after using CRUD to delete it. This makes me happy!!',
    title: 'Kimmy New Product',
    brand: 'KHB World',
    category: {
      name: 'API Funsies',
      age: 'All Ages',
      playerCount: 'Come one! Come All!!',
    },
    specs: {
      part_Number: 'rando part string',
      GTIN: 9875750,
    },
  }

  Product.create(productObject)
    .then((results) => {
      console.log('Create results:', results);
      res.status(200).send('Product Created!');
    })
    .catch((err) => {
      console.log('Item creation error:', err);
      res.status(500).send('Item creation error!');
    });
};

const update = (req, res) => {
  let escapedValues = [];
  let id = req.params.product_id;
  let update = 'Kimmy updated this description with CRUD! CRUD is cooool!!';

  escapedValues.push(id, update);

  db.query(`UPDATE products SET description = ? WHERE id = ?`, escapedValues, (error, results, fields) => {
    if (error) throw error;
    console.log()
  } )
    .then((results) => {
      console.log('Update results:', results);
      res.status(200).send('Product updated!')
    })
    .catch((err) => {
      console.log('Update error:', err);
      res.status(500).send('Update error!');
    });
};

const remove = (req, res) => {
  // 37 and 38 have been deleted
  let id = req.params.product_id;

  Product.findOneAndDelete({ product_id: id })
    .then((result) => {
      console.log('Delete result:', result);
      res.status(200).send('Product removed!');
    })
    .catch((err) => {
      console.log('Item deletion error:', err);
      res.status(500).send('Item deletion error!')
    });
};

module.exports = {
  title,
  brand,
  create,
  update,
  remove
};

/* future addition - query params  - if req.params.length === 0;
req.query = id  - routes and test must change
*/
