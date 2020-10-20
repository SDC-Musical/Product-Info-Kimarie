const { expect } = require('chai');
const request = require('supertest');
const dbSetup = require('./helper.spec.js');
const app = require('../../server/index.js');

const { Product } = require('../../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/:id', (req, res)=> {
  Product
  .findById(req.params.id)
  .then((data)=>{
              if(data){
                  res.status(200).send(data)
              }else{      // query returned null
                  res.status(404).send({err:"data not found"})
              }
          })
          .catch((err) => res.status(500).send(err))
})

describe('GET: /api/products/:product_id route to get data', () => {
    let insertedData = {category: { name: 'Lorem', age: '17' },
    specs: { part_Number: 'sollicitudin8223', GTIN: 56111014882243 },
    product_id: 200,
    description: 'Vestibulum finibus arcu in nibh eleifend ullamcorper',
    title: 'ipsum',
    brand: 'dolor',
    __v: 0}
    dbSetup();
    beforeEach((done) =>{
        new Product(insertedData)
                .save()
                .then(() => done())
                .catch((err) => done(err))
    })

    it('existing data', (done) => {
        request(app)
          .get('/200')
                .then((res)=>{
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.include(insertedData)
                    done()
                })
                .catch((err) => done(err))
    })

    it('non existent data', (done) => {
        request(app).get('/203')
                .then((res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body).to.deep.equal({err:"data not found"});
                    done()
                })
                .catch((err) => done(err))
    })

    it('invalid id', (done) => {
        request(app).get('/string')
                .then((res) => {
                    expect(res.statusCode).to.equal(500);
                    done()
                })
                .catch((err) => done(err))
    })
})