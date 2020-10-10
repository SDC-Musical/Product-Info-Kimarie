const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  title: {
    async get(id) {
      await Product.findOne({ product_id: `${id}` }, 'description title').exec();
    },
  },
};
