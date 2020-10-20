const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/index.js');

const PORT = process.env.PORT || 3004;
const app = express();
const client = path.join(__dirname, '/../client/dist');

mongoose.connect('mongodb://localhost/Product')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(client));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

module.exports = app;
