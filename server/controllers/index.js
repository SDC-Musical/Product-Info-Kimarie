const models = require('../../public/helpers/index.js');

module.exports = {
  title: {
    get(req, res) {
      models.title.get((err, titles) => {
        if (err) {
          console.log(err);
          res.status(500).send('Something Broke!');
        } else {
          res.status(200).send(titles);
        }
      });
    },
  },
};
