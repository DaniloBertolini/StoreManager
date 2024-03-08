const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');

chai.use(sinonChai);

const { allSales, oneSale } = require('../../mocks/salesMock');
const { salesServices } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { allSalesSuccess, messageSaleNotFound, oneSaleFailed, oneSalesuccess } = require('../../mocks/salesMockResponse');

describe('Sales Controller Test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('All Sales', async function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(salesServices, 'allSales').resolves(allSalesSuccess);

    await salesController.allSalesCon(req, res);

    expect(res.status).to.calledWith(200);
    expect(res.json).to.calledWith(allSales);
  });

  it('One Sale Success', async function () {
    const req = {
      params: 1,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(salesServices, 'oneSale').resolves(oneSalesuccess);

    await salesController.oneSaleCon(req, res);

    expect(res.status).to.calledWith(200);
    expect(res.json).to.calledWith(oneSale);
  });

  it('One Sale Failed', async function () {
    const req = {
      params: -1,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(salesServices, 'oneSale').resolves(oneSaleFailed);

    await salesController.oneSaleCon(req, res);

    expect(res.status).to.calledWith(404);
    expect(res.json).to.calledWith(messageSaleNotFound);
  });
});