module.exports = {
  getAllProducts: 'SELECT * FROM products',
  getOneProduct: 'SELECT * FROM products WHERE id = ?',
  postOneProduct: 'INSERT INTO products (name) VALUES (?)',
};