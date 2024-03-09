const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');

const { salesModels } = require('../../../src/models');
const { allSales, oneSale } = require('../../mocks/salesMock');
const { salesServices } = require('../../../src/services');
const { messageSaleNotFound } = require('../../mocks/salesMockResponse');

chai.use(sinonChai);

describe('Sales Service Test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('All Sales', async function () {
    sinon.stub(salesModels, 'findAll').resolves(allSales);

    const response = await salesServices.allSales();

    expect(response.status).to.be.equal('SUCCESSFUL');
    expect(response.data).to.be.equal(allSales);
  });

  it('One Sale Success', async function () {
    sinon.stub(salesModels, 'findOne').resolves(oneSale);

    const response = await salesServices.oneSale(1);

    expect(response.status).to.be.equal('SUCCESSFUL');
    expect(response.data).to.be.equal(oneSale);
  });

  it('One Sale Failed', async function () {
    sinon.stub(salesModels, 'findOne').resolves([]);

    const response = await salesServices.oneSale(-1);

    expect(response.status).to.be.equal('NOT_FOUND');
    expect(response.data).to.be.deep.equal(messageSaleNotFound);
  });
});