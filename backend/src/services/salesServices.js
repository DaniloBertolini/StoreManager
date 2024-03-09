const { salesModels } = require('../models');

const allSales = async () => {
  const sales = await salesModels.findAll();
  return { status: 'SUCCESSFUL', data: sales };
};

const oneSale = async (id) => {
  const sale = await salesModels.findOne(id);
  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: sale };
};

module.exports = {
  allSales,
  oneSale,
};