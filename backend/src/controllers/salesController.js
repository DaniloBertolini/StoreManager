const { salesServices } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allSalesCon = async (_req, res) => {
  const { status, data } = await salesServices.allSales();
  return res.status(mapStatusHTTP(status)).json(data);
};

const oneSaleCon = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesServices.oneSale(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allSalesCon,
  oneSaleCon,
};