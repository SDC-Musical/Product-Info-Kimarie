import sampleData from '../sample.spec/sampleData.spec.js';

const mongoose = require('mongoose');
const { expect, assert } = require('chai');
const helper = require('../../public/helper-functions.js');
const seed = require('..');

const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('Database is successfully seeded', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/Product')
      .then(() => {
        console.log('Connected to MongoDB!');
        Product.deleteMany({});
        console.log('Database cleared');
      })
      .catch((err) => console.error("Coudn't connect MongoDB:", err));

    done();
  });
  it('it should have 0 products created before seeding', () => {
    let count = 0;
    Product.countDocuments()
      .then((result) => {
        count = result;
        expect(count).to.equal(0);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('it should return random number between min and max (max and min inclusive)', () => {
    const min = 5;
    const max = 10;
    const num = helper.randNum(min, max);
    assert.isAtLeast(num, min);
    assert.isAtMost(num, max);
  });
  it('it should return random string of n of length n', () => {
    const num1 = 5;
    const str1 = helper.gtinStr(num1);
    assert.equal(num1, str1.length);
  });
  it('it should insert sample data into database', () => {
    helper.insertProducts(sampleData);
    let count = 0;
    Product.countDocuments()
      .then((result) => {
        count = result;
        expect(count).to.equal(12);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
/*
Test needs to be added with mock data
// create new product is creating an product object
// it('Document should be prepared for inserting'
// it('Document should be saved in database')
*/
