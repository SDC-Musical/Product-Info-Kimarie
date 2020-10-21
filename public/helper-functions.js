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
};
