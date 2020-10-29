import sampleData from '../sample.spec/sampleData.spec.js';

const mongoose = require('mongoose');
const { expect, assert } = require('chai');
const helper = require('../../public/helper-functions.js');

describe('Database seeding functions are working', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/Product')
      .then(() => {
        console.log('Connected to MongoDB!');
        done();
      })
      .catch((err) => console.error("Coudn't connect MongoDB:", err));
  });
  after((done) => {
    mongoose.connection.close()
      .then(() => {
        console.log('Closed MongoDB!');
        done();
      })
      .catch((err) => console.error("Coudn't close MongoDB:", err));
  });
  it('it should have 0 products created before seeding', async () => {
    let result = 0;
    await helper.delete();
    result = await helper.count();
    expect(result).to.equal(0);
  });
  it('it should return random number between min and max (max and min inclusive)', () => {
    const min = 5;
    const max = 10;
    const num = helper.randNum(min, max);
    assert.isAtLeast(num, min);
    assert.isAtMost(num, max);
  });
  it('it should return random string of n of length n', (done) => {
    const num1 = 5;
    const str1 = helper.gtinStr(num1);
    assert.equal(num1, str1.length);
    done();
  });
});

describe('Database seeding functions are working', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/Product')
      .then(() => {
        console.log('Connected to MongoDB!');
        done();
      })
      .catch((err) => console.error("Coudn't connect MongoDB:", err));
  });
  after(async () => {
    await helper.delete();
    mongoose.connection.close()
      .then(() => {
        console.log('Closed MongoDB!');
      })
      .catch((err) => console.error("Coudn't close MongoDB:", err));
  });
  it('it should insert sample data into database', async () => {
    let result = 0;
    await helper.insertProducts(sampleData);
    result = await helper.count();
    expect(result).to.equal(12);
  });
});
