const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const DBKey = require('../database/keys.js')
const router = require('./routes/index.js');
const parser = require('body-parser');
const morgan = require('morgan');

// Saving env values for deployment
// const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
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

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: DBKey,
});

db.connect(err => {
  if (err) {
    console.log('Error establishing mySQL DB connection:', err);
  } else {
    console.log('mySql DB connection successful!');
  }
});

app.get('*', (req, res) => {
  if (Object.keys(req.params)[0] !== 'product_id') {
    res.status(404);
  }
  res.sendFile(path.join(__dirname, './../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${HOST}:${PORT}!`);
});

exports.app = app;
exports.db = db;
