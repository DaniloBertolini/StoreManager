const { productsServices } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allProdutsCon = async (_req, res) => {
  const { status, data } = await productsServices.allProduts();
  return res.status(mapStatusHTTP(status)).json(data);
};

const oneProdutsCon = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsServices.oneProdut(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allProdutsCon,
  oneProdutsCon,
};