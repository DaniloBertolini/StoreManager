const connection = require('./connection');
const { getAllSales, getOneSale } = require('./querys/salesQuery');

const findAll = async () => {
  const [products] = await connection.execute(getAllSales);
  return products;
};

const findOne = async (id) => {
  const [[product]] = await connection.execute(getOneSale, [id]);
  return product;
};

module.exports = {
  findAll,
  findOne,
};