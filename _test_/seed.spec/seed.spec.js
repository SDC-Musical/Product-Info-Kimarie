const mongoose = require('mongoose');
const { expect, assert } = require('chai');
const seed = require('../../seedScript.js');

const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('Database is successfully seeded', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/Product')
      .then(() => console.log('Connected to MongoDB!'))
      .catch((err) => console.error("Coudn't connect MongoDB:", err));
    done();
  });
  it('it should return random number between min and max (max and min inclusive)', () => {
    const min = 5;
    const max = 10;
    const num = seed.randNum(min, max);
    assert.isAtLeast(num, min);
    assert.isAtMost(num, max);
  });
  it('it should return random string of n of length n', () => {
    const num1 = 5;
    const str1 = seed.gtinStr(num1);
    assert.equal(num1, str1.length);
  });
  it('it should have 100 products created ', () => {
    let count = 0;
    Product.countDocuments()
      .then((result) => {
        count = result;
        expect(count).to.equal(100);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

/*
Test needs to be added with mock data
// it('Document should be prepared for inserting'
// it('Document should be saved in database')
*/
