const { allSales, oneSale } = require('./salesMock');

const messageSaleNotFound = {
  message: 'Sale not found',
};

const allSalesSuccess = {
  status: 'SUCCESSFUL',
  data: allSales,
};

const oneSalesuccess = {
  status: 'SUCCESSFUL',
  data: oneSale,
};

const oneSaleFailed = {
  status: 'NOT_FOUND',
  data: messageSaleNotFound,
};

module.exports = {
  allSalesSuccess,
  oneSalesuccess,
  oneSaleFailed,
  messageSaleNotFound,
};