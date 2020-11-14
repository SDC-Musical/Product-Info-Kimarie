const router = require('express').Router();
const controller = require('../controllers');

/* ----------------------- Internal---------- */
router.get('/products/:product_id', controller.title);
router.get('/brand/:brand', controller.brand);

/* ----------------------- CRUD Additions-----*/
// Create a new product
router.post('/', controller.create);

// Update a product
router.put('/:product_id', controller.update);

// Delete a product
router.delete('/:product_id', controller.remove);

/* ----------------------- External---------- */
// router.get('reviews/product_id');

module.exports = router;
