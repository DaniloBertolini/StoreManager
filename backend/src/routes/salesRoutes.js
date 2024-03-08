const router = require('express').Router();

const { salesController } = require('../controllers');

router.get('/', salesController.allSalesCon);
router.get('/:id', salesController.oneSaleCon);

module.exports = router;