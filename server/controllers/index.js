const lodash = require('lodash');
const Products = require('../../database/models/index.js');

const title = (req, res) => {
  const id = req.params.product_id;
  const selector = ['id', id];

  Products.read(selector, (err, result) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      if (result.length === 0) {
        res.status(404).send('No matching entry found');
      } else {
        res.status(200).send(result[0].title);
      }
    }
  });
};

const brand = (req, res) => {
  const brandName = req.query.brand_name;
  const selector = ['brand', brandName];

  Products.read(selector, (err, result) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      if (result.length === 0) {
        res.status(404).send('No matching entry found');
      } else {
        res.status(200).send(result);
      }
    }
  });
}

const createEntry = (req, res) => {
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

const updateDatabase = (req, res) => {
  const selector = {
    id: req.body.productId,
    field: req.body.field,
    updateInfo: req.body.updateInfo,
  }

  Products.update(selector, (err, result) => {
    if (err) {
      console.log('Update error:', err);
      res.status(500).send({ error: err });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).send('No matching entry found');
      } else {
        res.status(200).send(`${result.affectedRows} row(s) updated`);
      }
    }
  });
};

const deleteEntry = (req, res) => {
  //deleted 37
  // Change to use req.query.field and req.query.value to allow deletion using fileds other than product id
  const selector = {
    field: 'id',
    fieldValue: req.params.product_id,
  };

  Products.remove(selector, (err, result, fields) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).send('No matching entry found');
      } else {
        res.status(200).send(`${result.affectedRows} row(s) deleted`);
      }
    }
  });
};

module.exports = {
  title,
  brand,
  createEntry,
  updateDatabase,
  deleteEntry,
};
