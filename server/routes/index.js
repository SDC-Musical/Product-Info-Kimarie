const express = require('express').Router();
const controller = require('../controllers/index.js');

const router = express.Router();
/* ----------------------- Internal---------- */
router.get('title/:product_Id', controller.title.get);
router.get('brand/:product_Id', controller.message.post);

/* ----------------------- External---------- */
router.get('reviews/product_id');

module.exports = router;
