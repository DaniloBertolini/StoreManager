const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');

const validations = require('../../../src/middlewares');

chai.use(sinonChai);

describe('Middlewares Tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Validate Name Length Success', function () {
    const req = {
      body: {
        name: 'ProductX',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validations.validateName(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Validate Name Length Failed', function () {
    const req = {
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validations.validateName(req, res, next);

    expect(res.status).to.calledWith(400);
    expect(res.json).to.calledWith({ message: '"name" is required' });
    expect(next).to.not.calledWith();
  });
});
// const next = sinon.stub().returns();
// myMiddlewares.validateMiddleware(req, res, next);
// expect(next).to.have.been.calledWith();