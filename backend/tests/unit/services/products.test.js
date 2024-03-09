const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');
const { productsModels } = require('../../../src/models');
const { allProducts, oneProduct, oneProductOnlyName, oneProductWithNameLenthWrong, productInsertId, oneProductWithNameLenthEquals5 } = require('../../mocks/productsMock');
const { productsServices } = require('../../../src/services');
const { messageProductNotFound, messageProductUnprocessable, oneProductCreated2 } = require('../../mocks/productsMockResponse');

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
    sinon.stub(productsModels, 'create').resolves(productInsertId);

    const response = await productsServices.createProduct(oneProductOnlyName);

    expect(response.status).to.be.equal('CREATED');
    expect(response.data).to.be.deep.equal(oneProduct);
  });

  it('Register One Product Failed With Name Less Than 5', async function () {
    const response = await productsServices.createProduct(oneProductWithNameLenthWrong);

    expect(response.status).to.be.equal('UNPROCESSABLE');
    expect(response.data).to.be.deep.equal(messageProductUnprocessable);
  });

  it('Register One Product Success With Name Equals 5', async function () {
    sinon.stub(productsModels, 'create').resolves(productInsertId);

    const response = await productsServices.createProduct(oneProductWithNameLenthEquals5);

    expect(response.status).to.be.equal('CREATED');
    expect(response.data).to.be.deep.equal(oneProductWithNameLenthEquals5);
  });
});