const { productsModels } = require('../models');

const allProduts = async () => {
  const products = await productsModels.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

const oneProdut = async (id) => {
  const product = await productsModels.findOne(id);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
};

module.exports = {
  allProduts,
  oneProdut,
};