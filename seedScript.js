const mongoose = require('mongoose');
const helper = require('./public/helper-functions.js');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
mongoose.connect(`mongodb://${MONGO_HOST}/Product`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));

const products = [];
const descriptionChoice = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'Nunc quis aliquet ex', 'vitae porta massa', 'Donec congue turpis est', 'nec molestie risus auctor vel', 'Sed ornare bibendum varius', 'Etiam maximus nulla tristique pulvinar auctor', 'Fusce sed nulla tempor', 'eleifend justo a', 'interdum ante', 'Curabitur in blandit diam', 'Aenean vehicula congue tortor', 'a malesuada tortor sodales eget', 'Vestibulum eu ultricies eros', 'Vestibulum a erat vel libero tincidunt semper', 'Suspendisse sollicitudin', 'erat vel fermentum molestie', 'mi nulla sodales ligula', 'eu pretium diam libero ullamcorper ante', 'Morbi lacinia ultrices neque vel accumsan', 'Vestibulum finibus arcu in nibh eleifend ullamcorper', 'Vivamus eleifend sed nulla nec tempor', 'Sed pretium', 'arcu luctus ornare euismod', 'diam orci auctor libero '];

const titleChoice = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'In', 'tristique', 'dolor', 'vel', 'porta', 'porta', 'Mauris', 'non', 'leo', 'ac', 'lectus', 'venenatis', 'egestas', 'pellentesque', 'et', 'dui', 'Curabitur', 'varius', 'quis', 'quam', 'non', 'ornare', 'In', 'sed', 'iaculis', 'odio', 'bibendum', 'hendrerit', 'lacus', 'Ut', 'in', 'pellentesque', 'turpis', 'et', 'viverra', 'odio', 'Vestibulum', 'et', 'tortor', 'iaculis', 'metus', 'porttitor', 'auctor', 'in', 'a', 'ex', 'Fusce', 'facilisis', 'purus', 'ac', 'ultrices', 'facilisis', 'lectus', 'turpis', 'efficitur', 'sem', 'id', 'suscipit', 'felis', 'quam', 'sed', 'ex', 'In', 'nisi', 'ante', 'molestie', 'ac', 'sapien', 'eget', 'rutrum', 'convallis', 'lorem', 'Praesent', 'vestibulum', 'placerat', 'massa', 'sit', 'amet', 'hendrerit', 'Aliquam', 'erat', 'volutpat', 'In', 'ut', 'ligula', 'vel', 'odio', 'venenatis', 'lobortis', 'Sed', 'in', 'tincidunt'];

const brandName = [
  'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

const categoryName = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

const playerCount = ['1 Player', '2 Player', '3 Player', '4 Player', '5 Player', '6 Player'];
const partNumber = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Sed', 'volutpat', 'feugiat', 'consequat', 'Donec', 'id', 'faucibus', 'ligula', 'Maecenas', 'lobortis', 'laoreet', 'maximus', 'Donec', 'vel', 'nunc', 'mi', 'Nam', 'rutrum', 'rutrum', 'convallis', 'Donec', 'tempus', 'gravida', 'risus', 'laoreet', 'elementum', 'Fusce', 'congue', 'rhoncus', 'sollicitudin', 'Nunc', 'quis'];

function createNewProducts() {
  for (let i = 1; i < 101; i += 1) {
    const productObject = {};
    productObject.product_id = i;
    productObject.description = `${descriptionChoice[helper.randNum(0, 24)]}${
      descriptionChoice[helper.randNum(0, 24)]
    }${descriptionChoice[helper.randNum(0, 24)]
    }${descriptionChoice[helper.randNum(0, 24)]
    }${
      descriptionChoice[helper.randNum(0, 24)]
    }${
      descriptionChoice[helper.randNum(0, 24)]}`;
    productObject.title = titleChoice[i - 1];
    productObject.brand = brandName[helper.randNum(1, 8)];
    productObject.category = {};
    productObject.category.name = categoryName[helper.randNum(0, 4)];
    productObject.category.age = (helper.randNum(3, 18)).toString().concat(' Player');
    productObject.category.playerCount = playerCount[helper.randNum(0, 6)];
    productObject.specs = {};
    // eslint-disable-next-line max-len
    productObject.specs.part_Number = partNumber[helper.randNum(0, 40)] + helper.gtinStr(4).toString();
    productObject.specs.GTIN = helper.gtinStr(14);
    products.push(productObject);
  }
}

const seed = async () => {
  await helper.delete();
  await createNewProducts();
  console.log(products.length);
  await helper.insertProducts(products);
};

seed();
module.exports = {
  createNewProducts,
};
