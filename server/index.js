const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/index.js');
const parser = require('body-parser');
const morgan = require('morgan');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3004;

const client = path.join(__dirname, '/../client/dist');

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  });
  next();
});

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(morgan('dev'));

app.use('/api', router);
app.use('/products/:product_id', express.static(client));
app.use('/', express.static(client));

mongoose.connect(`mongodb://${MONGO_HOST}/Product`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));

app.get('*', (req, res) => {
  if (Object.keys(req.params)[0] !== 'product_id') {
    res.status(404);
  }
  res.sendFile(path.join(__dirname, './../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${HOST}:${PORT}!`);
});

module.exports = app;
