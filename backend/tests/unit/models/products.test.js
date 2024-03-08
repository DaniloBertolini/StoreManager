const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { allProducts, oneProduct } = require('../../mocks/productsMock');
const { productsModels } = require('../../../src/models');

chai.use(sinonChai);

describe('Products Model Test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('All Products', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);

    const response = await productsModels.findAll();

    expect(response).to.equal(allProducts);
  });

  it('One Products Succes', async function () {
    sinon.stub(connection, 'execute').resolves([[oneProduct]]);

    const response = await productsModels.findOne(1);

    expect(response).to.equal(oneProduct);
  });

  it('One Products Failed', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await productsModels.findOne(-1);

    expect(response).to.equal();
  });
});