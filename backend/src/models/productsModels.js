const connection = require('./connection');
const { getAllProducts, getOneProduct, postOneProduct } = require('./querys/productsQuery');

const findAll = async () => {
  const [products] = await connection.execute(getAllProducts);
  return products;
};

const findOne = async (id) => {
  const [[product]] = await connection.execute(getOneProduct, [id]);
  return product;
};

const create = async (name) => {
  const [product] = await connection.execute(postOneProduct, [name]);
  return product;
};

module.exports = {
  findAll,
  findOne,
  create,
};