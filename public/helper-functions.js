const { Product } = require('../database/models/product.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function randNum(min, max) {
  const randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum);
}

module.exports = {
  getType(obj) {
    if (Array.isArray(obj)) return 'array';
    if (typeof obj === 'string') return 'string';
    if (obj != null && typeof obj === 'object') return 'object';
    return 'other';
  },
  getObjDetails(json) {
    const keys = Object.getOwnPropertyNames(json);
    return keys;
  },
  randNum,
  gtinStr(num) {
    let gtStr = '';
    while (gtStr.length < num) {
      gtStr += (randNum(0, 9).toString());
    }
    return gtStr;
  },
  insertProducts(arr) {
    arr.forEach((item) => {
      new Product(item).save((err) => {
        if (err) {
          console.log('Error: ', err);
        }
      });
    });
  },
};
