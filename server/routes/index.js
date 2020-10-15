const router = require('express').Router();
const controller = require('../controllers');

/* ----------------------- Internal---------- */
router.get('/product/:product_id', controller.title);
router.get('/brand/:brand', controller.brand);

/* ----------------------- External---------- */
// router.get('reviews/product_id');

module.exports = router;
