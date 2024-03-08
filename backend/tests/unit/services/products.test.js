const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');
const { productsModels } = require('../../../src/models');
const { allProducts, oneProduct } = require('../../mocks/productsMock');
const { productsServices } = require('../../../src/services');
const { messageProductNotFound } = require('../../mocks/productsMockResponse');

chai.use(sinonChai);

describe('Products Service Test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('All Products', async function () {
    sinon.stub(productsModels, 'findAll').resolves(allProducts);

    const response = await productsServices.allProduts();

    expect(response.status).to.be.equal('SUCCESSFUL');
    expect(response.data).to.be.equal(allProducts);
  });

  it('One Product Success', async function () {
    sinon.stub(productsModels, 'findOne').resolves(oneProduct);

    const response = await productsServices.oneProdut(1);

    expect(response.status).to.be.equal('SUCCESSFUL');
    expect(response.data).to.be.equal(oneProduct);
  });

  it('One Product Failed', async function () {
    sinon.stub(productsModels, 'findOne').resolves();

    const response = await productsServices.oneProdut(-1);

    expect(response.status).to.be.equal('NOT_FOUND');
    expect(response.data).to.be.deep.equal(messageProductNotFound);
  });
});