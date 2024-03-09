const connection = require('./connection');
const { getAllSales, getOneSale } = require('./querys/salesQuery');

const findAll = async () => {
  const [sales] = await connection.execute(getAllSales);
  return sales;
};

const findOne = async (id) => {
  const [sales] = await connection.execute(getOneSale, [id]);
  return sales;
};

module.exports = {
  findAll,
  findOne,
};