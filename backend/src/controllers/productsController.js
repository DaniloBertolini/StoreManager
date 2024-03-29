const { productsServices } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allProdutsCon = async (_req, res) => {
  const { status, data } = await productsServices.allProduts();
  return res.status(mapStatusHTTP(status)).json(data);
};

const oneProdutCon = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsServices.oneProdut(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const createOneProductCon = async (req, res) => {
  const { body } = req;
  const { status, data } = await productsServices.createProduct(body);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allProdutsCon,
  oneProdutCon,
  createOneProductCon,
};