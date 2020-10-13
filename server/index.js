const express = require('express');
const path = require('path');
const router = require('./routes/index.js');

const PORT = process.env.PORT || 3004;
const app = express();
const client = path.join(__dirname, '/../client/dist');

app.use(express.static(client));
app.use('/productinfo', router);

app.get('/hello', (req, res) => {
  res.send('Working Path');
});
// in future app.get /, titlerouter....
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
