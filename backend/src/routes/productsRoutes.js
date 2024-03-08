const router = require('express').Router();

const { productsController } = require('../controllers');

router.get('/', productsController.allProdutsCon);
router.get('/:id', productsController.oneProdutCon);

module.exports = router;