const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/index.js');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3004;
const app = express();
const client = path.join(__dirname, '/../client/dist');
mongoose.connect(`mongodb://${HOST}/Product`)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  });
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use('/products/:product_id', express.static(client));
app.use('/', express.static(client));
app.get('*', (req, res) => {
  if (Object.keys(req.params)[0] !== 'product_id') {
    res.status(404);
  }
  res.sendFile(path.join(__dirname, './../client/dist/index.html'));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

module.exports = app;
