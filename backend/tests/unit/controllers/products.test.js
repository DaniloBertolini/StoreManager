const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');

chai.use(sinonChai);

const { allProducts, oneProduct } = require('../../mocks/productsMock');
const { productsServices } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { allProductsSuccess, oneProductFailed, messageProductNotFound, oneProductSuccess } = require('../../mocks/productsMockResponse');

describe('Products Controller Test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('All Products', async function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsServices, 'allProduts').resolves(allProductsSuccess);

    await productsController.allProdutsCon(req, res);

    expect(res.status).to.calledWith(200);
    expect(res.json).to.calledWith(allProducts);
  });

  it('One Product Success', async function () {
    const req = {
      params: 1,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsServices, 'oneProdut').resolves(oneProductSuccess);

    await productsController.oneProdutsCon(req, res);

    expect(res.status).to.calledWith(200);
    expect(res.json).to.calledWith(oneProduct);
  });

  it('One Product Failed', async function () {
    const req = {
      params: -1,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsServices, 'oneProdut').resolves(oneProductFailed);

    await productsController.oneProdutsCon(req, res);

    expect(res.status).to.calledWith(404);
    expect(res.json).to.calledWith(messageProductNotFound);
  });
});