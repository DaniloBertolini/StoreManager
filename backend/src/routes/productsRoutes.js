const router = require('express').Router();

const { productsController } = require('../controllers');
const validateName = require('../middlewares/validateName');

router.get('/', productsController.allProdutsCon);
router.get('/:id', productsController.oneProdutCon);
router.post('/', validateName, productsController.createOneProductCon);

module.exports = router;