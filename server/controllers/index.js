const mongoose = require('mongoose');

const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect('mongodb://localhost/Product')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));

const title = (req, res) => {
  const id = req.params.product_id.split(':').join('');
  console.log(id);
  Product.findOne({ product_id: id }, 'name title description')
    .then((result) => {
      res.send(`title:${result}`);
    })
    .catch((err) => {
      console.log(err);
    });
// models.getTitle((err, title) => {
//   if (err) {
//     console.log(err);
//     res.status(500).send('Something Broke!');
//   } else {
//     res.status(200).send(title);
//   }
// });
};

module.exports = {
  title,
  // brand
};
