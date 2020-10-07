const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3004;
const app = express();
const client = path.join(__dirname, '/../client/dist');
app.use(express.static(client));
app.get('/', (req, res) => {
  res.send('Working Path');
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
