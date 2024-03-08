const { allProducts, oneProduct } = require('./productsMock');

const messageProductNotFound = {
  message: 'Product not found',
};

const allProductsSuccess = {
  status: 'SUCCESSFUL',
  data: allProducts,
};

const oneProductSuccess = {
  status: 'SUCCESSFUL',
  data: oneProduct,
};

const oneProductFailed = {
  status: 'NOT_FOUND',
  data: messageProductNotFound,
};

module.exports = {
  allProductsSuccess,
  oneProductSuccess,
  oneProductFailed,
  messageProductNotFound,
};