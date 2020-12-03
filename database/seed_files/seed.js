const faker = require('faker');
const fs = require('fs');

let age = ['0 to 3 years', '3 to 6 years', 'safe for ages 6 and above', '12 years and above', 'good for all ages', 'fun for all ages'];
let playerCount = ['1 player', '2 players', '2 to 4 players', '4 players', '4 to 6 players', 'up to 10 players', '4 to 8 players', '3 to 9 players', '2 teams of 3'];

const writeCSVFile = fs.createWriteStream('db/products.csv');

const streamProductsToFile = (writer, encoding, callback) => {
  let i = 10000000;

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      let product = [];
      let csv = '';
      let ageIndex = Math.floor(Math.random() * 6);
      let playerIndex = Math.floor(Math.random() * 9);

      let description = faker.commerce.productDescription();
      let title = faker.commerce.productName();
      let brand = faker.name.lastName() + ' ' + faker.lorem.words() + ' ' + faker.company.companySuffix();
      let category = faker.commerce.productAdjective() + ' ' + faker.commerce.department();
      let part = faker.finance.bic();
      let GTIN = faker.finance.routingNumber();

      product.push(description, title, brand, category, age[ageIndex], playerCount[playerIndex], part, GTIN);

      product.forEach((entry) => {
        csv += entry + ';';
      })

      csv += "\n";

      if (i === 0) {
        writer.write(csv, encoding, callback);
      } else {
        ok = writer.write(csv, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      writer.once('drain', write);
    }
  };
write();
};

streamProductsToFile(writeCSVFile, 'utf8', () => {
  writeCSVFile.end();
});
