const { productsModels } = require('../models');
const { validateNameLength } = require('./validations');

const allProduts = async () => {
  const products = await productsModels.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

const oneProdut = async (id) => {
  const product = await productsModels.findOne(id);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
};

const createProduct = async ({ name }) => {
  if (validateNameLength(name)) {
    return {
      status: 'UNPROCESSABLE',
      data: { message: '"name" length must be at least 5 characters long' },
    }; 
  }
  
  const { insertId } = await productsModels.create(name);
  return { status: 'CREATED', data: { id: insertId, name } };
};

module.exports = {
  allProduts,
  oneProdut,
  createProduct,
};