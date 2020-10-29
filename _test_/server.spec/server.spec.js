const { expect, assert } = require('chai');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../server/index.js');
const helper = require('../../public/helper-functions.js');

const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('Server API Routes', () => {
  before(async () => {
  // eslint-disable-next-line no-undef
    server = app.listen(3004);
    await Product.deleteMany({});
    await Product.create({
      product_id: 1,
      category: { name: 'ipsum', age: '14' },
      specs: {
        part_Number: 'laoreet7056',
        GTIN: 31704482802446,
      },
      description: 'Lorem ipsum dolor sit amet',
      title: 'ipsum',
      brand: 'ipsum',
    });
  });
  it('it should have a status code 200 and respond with a JsonObject when path is correct and document exists', (done) => {
    const id = 1;
    request(app)
      .get(`/api/products/${id}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        assert.equal('object', helper.getType(res.body));
      })
      .then(() => done());
  });
  it('it should have correct length and keys in response JsonObject', (done) => {
    const id = 1;
    request(app)
      .get(`/api/products/${id}`)
      .expect('Content-Type', /json/)
      .then((res) => {
        const arrayKeys = helper.getObjDetails(res.body);
        assert.equal(arrayKeys.length, 6);
      })
      .then(() => done());
  });
  it('it should have a status code 404 when path is incorrect', (done) => {
    const id = 2;
    request(app)
      .get(`/api/production/`)
      .expect(404)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .then((res) => {
        assert.equal('{}', JSON.stringify(res.body));
      })
      .then(() => done());
  });
  it('it should have a status code 500 when product does not exist', (done) => {
    const id = 2;
    request(app)
      .get(`/api/products/${id}`)
      .expect(500)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .then((res) => {
        assert.equal('{"error":"Something Broke!"}', JSON.stringify(res.body));
      })
      .then(() => done());
  });
  after((done) => {
    server.close();
    console.log('Closed Server!');
    Product.deleteMany({})
      .then(() => {
        mongoose.connection.close();
      })
      .then(() => {
        console.log('Closed MongoDB!');
        done();
      })
      .catch((err) => console.error("Coudn't close MongoDB:", err));
  });
});

// describe('GET /api/products/product_id', () => {
