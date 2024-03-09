const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const oneProduct = {
  id: 1,
  name: 'Martelo de Thor',
};

const oneProductWithNameLenthWrong = {
  name: 'Mar',
};

const oneProductWithNameLenthEquals5 = {
  id: 1,
  name: 'Porta',
};

const oneProductWithNameLenthEquals5OnlyName = {
  name: 'Porta',
};

const oneProductOnlyName = {
  name: 'Martelo de Thor',
};

const productInsertId = { insertId: 1 };

module.exports = {
  allProducts,
  oneProduct,
  oneProductOnlyName,
  oneProductWithNameLenthWrong,
  productInsertId,
  oneProductWithNameLenthEquals5OnlyName,
  oneProductWithNameLenthEquals5,
};