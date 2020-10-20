const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const productinfo = require('../../server/routes/index.js');

const app = express();
app.use('/', productinfo);




describe('Persistent Node Server', () => {

  afterEach(() => {
    mongoose.connection.close();
  });

describe('GET /api/products/:product_id', () => {
  it('it should have a status code 500', (done) => {
    request(app)
      .get('/products/:product_id')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect('Something Broke!')
      .expect(500)
      .end((err) => {
        if (err) done(err);
        done();
      });
  });
});

// describe('GET /api/brand/:brand', () => {
//   it('it should have a status code 200', (done) => {
//     request(app)
//       .get('/brand/:brand')
//       .expect('Content-Type', /json/)
//       .expect({ name: 'frodo' })
//       .expect(200)
//       .end((err, res) => {
//         if (err) done(err);
//         done(res.body);
//       });
//   });
// });