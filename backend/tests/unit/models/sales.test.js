const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { allSales, oneSale } = require('../../mocks/salesMock');
const { salesModels } = require('../../../src/models');

chai.use(sinonChai);

describe('Sales Model Test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('All Sales', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);

    const response = await salesModels.findAll();

    expect(response).to.equal(allSales);
  });

  it('One Sale Succes', async function () {
    sinon.stub(connection, 'execute').resolves([oneSale]);

    const response = await salesModels.findOne(1);

    expect(response).to.equal(oneSale);
  });

  it('One Sale Failed', async function () {
    sinon.stub(connection, 'execute').resolves([]);

    const response = await salesModels.findOne(-1);

    expect(response).to.equal();
  });
});