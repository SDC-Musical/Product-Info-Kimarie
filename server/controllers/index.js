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
    description: req.body.description,
    title: req.body.title,
    brand: req.body.brand,
    category: req.body.catName,
    age: req.body.age,
    player: req.body.player,
    part: req.body.part,
    GTIN: 9875750,
  }

  Products.create(productObject, (err, result) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send(`${result.affectedRows} record(s) created`);
    }
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
