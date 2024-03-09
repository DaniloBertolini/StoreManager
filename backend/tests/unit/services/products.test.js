const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');
const { productsModels } = require('../../../src/models');
const { allProducts, oneProduct, oneProductOnlyName, oneProductWithNameLenthWrong } = require('../../mocks/productsMock');
const { productsServices } = require('../../../src/services');
const { messageProductNotFound, oneProductCreated, oneProductNameFailed } = require('../../mocks/productsMockResponse');

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

  it('Register One Product Success', async function () {
    sinon.stub(productsModels, 'create').resolves(oneProduct);

    const response = await productsServices.createProduct(oneProductOnlyName);

    expect(response.status).to.be.equal('SUCCESSFUL');
    expect(response.data).to.be.deep.equal(oneProductCreated);
  });

  it('Register One Product Failed With Name Less Than 5', async function () {
    const response = await productsServices.createProduct(oneProductWithNameLenthWrong);

    expect(response.status).to.be.equal('UNPROCESSABLE');
    expect(response.data).to.be.deep.equal(oneProductNameFailed);
  });
});