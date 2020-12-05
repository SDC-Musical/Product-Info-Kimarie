const router = require('express').Router();
const controller = require('../controllers');

/* ----------------------- Internal---------- */
router.get('/products/:product_id', controller.title);
router.get('/brand', controller.brand);

/* ----------------------- CRUD Additions-----*/
// Create a new product
router.post('/create', controller.createEntry);

// Update a product
router.put('/update/:product_id', controller.updateDatabase);

// Delete a product
router.delete('/delete/:product_id', controller.deleteEntry);

/* ----------------------- External---------- */
// router.get('reviews/product_id');

module.exports = router;
