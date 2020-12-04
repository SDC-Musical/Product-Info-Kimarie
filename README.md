# Google Shopping Product Information

> Descriptions for each item including pruduct number, general description, product name (title), brand, category by name, age and player count, and specs (part number and GTIN)

## Related Projects

  - https://github.com/SDC-Musical/reviews-service
  - https://github.com/SDC-Musical/seller-catalog
  - https://github.com/SDC-Musical/images-service
  - https://github.com/SDC-Musical/Product-Info-Kimarie

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [Product-API](#Product-API)

## Usage
**Establishing seeded, mySQL database**
Log into mySQL from shell
*mysql -u yourUserName -p yourPassword*
Create a database called 'google_shopping'
*CREATE DATABASE google_shopping*
Create the file database/keys.js and add your password
```
  module.exports = {
    const mySQLUserName = 'yourMySQLUserName';
    const mySQLKey = 'yourMySQLPassword';
  }
```
From the root directory of the service, run the table generation script
*node database/seed_files/products.js*
Then run the data generation script to create a CSV with 10,000,000 entries
*node database/seed_files/seed.js*
In mySQL switch to the 'google_shopping' database
*USE google_shopping*
Upload the entries from databases/seed_files/products.csv from mySQL
```
  LOAD DATA LOCAL INFILE "path to db/products.csv on your machine"
  INTO TABLE products
  FIELDS TERMINATED by ";"
  LINES TERMINATED BY "\n"
  (description, title, brand, category_name, age_category, player_Count, part_Number, GTIN);
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

## Product-API
**CRUD**
- POST /create creates a new product
- GET products/:product_id returns the product associated with that id number
- GET brand/:brand returns an array of products of that brand
- PUT /update/:product_id updates the product at that id with the given information
- DELETE /delete/:product_id removes the product at that id from the collection

**CROSSORIGIN REQUESTS**



### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

