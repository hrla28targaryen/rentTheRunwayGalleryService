const router = require('express').Router();
const controller = require('./controller.js');

router
    .route('/')
    .get(controller.getAll);

router
    .route('/:productID')
    .get(controller.getProductReviews);

module.exports = router;