const { expect, assert } = require('chai');
const request = require('supertest');
const app = require('../../server/index.js');
const helper = require('../../public/helper-functions.js');

let server;
describe('Server App Routes', () => {
  before(() => {
    server = app.listen(3004);
  });
  it('it should have a status code 200 and respond with a JsonObject', (done) => {
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
  it('it should have correct length and keys', (done) => {
    const id = 3;
    request(app)
      .get(`/api/products/${id}`)
      .expect('Content-Type', /json/)
      .then((res) => {
        const arrayKeys = helper.getObjDetails(res.body);
        assert.equal(arrayKeys.length, 6);
      })
      .then(() => done());
  });
  after(() => {
    server.close();
  });
});

// describe('GET /api/products/product_id', () => {
