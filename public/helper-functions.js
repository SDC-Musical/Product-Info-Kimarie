module.exports = {
  getType(obj) {
    if (Array.isArray(obj)) return 'array';
    if (typeof obj === 'string') return 'string';
    if (obj != null && typeof obj === 'object') return 'object';
    return 'other';
  },
  getObjDetails(json) {
    // for each key
    // we can push into separate array of separate objects
    const keys = Object.getOwnPropertyNames(json);
    return keys;
  },
  gtinStr(num) {
    let gtStr = '';
    while (gtStr.length < num) {
      gtStr += (randNum(0, 9).toString());
    }
    return gtStr;
  },
  randNum(min, max) {
    const randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  },
};