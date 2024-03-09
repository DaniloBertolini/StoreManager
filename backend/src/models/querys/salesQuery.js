module.exports = {
  getAllSales: `
  SELECT
    s.id saleId,
    date,
    product_id productId,
    quantity
  FROM
    sales_products sp
  INNER JOIN
    sales s ON s.id = sp.sale_id
  `,
  getOneSale: `
  SELECT
    date,
    product_id productId,
    quantity
  FROM
    sales_products sp
  INNER JOIN
    sales s ON s.id = sp.sale_id
  WHERE id = ?
  `,
};