const { allProducts, oneProduct } = require('./productsMock');

const messageProductNotFound = {
  message: 'Product not found',
};

const messageProductUnprocessable = {
  message: '"name" length must be at least 5 characters long',
};

const allProductsSuccess = {
  status: 'SUCCESSFUL',
  data: allProducts,
};

const oneProductSuccess = {
  status: 'SUCCESSFUL',
  data: oneProduct,
};

const oneProductCreated = {
  status: 'CREATED',
  data: oneProduct,
};

const oneProductFailed = {
  status: 'NOT_FOUND',
  data: messageProductNotFound,
};

const oneProductNameFailed = {
  status: 'UNPROCESSABLE',
  data: messageProductUnprocessable,
};

module.exports = {
  allProductsSuccess,
  oneProductSuccess,
  oneProductFailed,
  messageProductNotFound,
  oneProductCreated,
  oneProductNameFailed,
  messageProductUnprocessable,
};