const mongoose = require('mongoose');

const dbSetup = () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/Product');
    mongoose.connection
      .once('open', () => done())
      .on('error', (err) => done(err));
  });
  beforeEach((done) => {
    mongoose.connection.db.listCollections({ name: 'products' })
      .next((err, collection) => {
        if (collection) {
          mongoose.connect.db.dropCollection('products')
            .then(() => done())
            .catch(() => done(err));
        } else {
          done(err);
        }
      });
  });

  after((done) => {
    mongoose.disconnect()
      .then(() => done())
      .catch((err) => done(err));
  });
};
module.exports = dbSetup;
