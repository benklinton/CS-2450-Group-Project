const { expect } = require('chai');
const sinon = require('sinon');
const DIVIDE = require('../src/UVSim/functions/DIVIDE');

describe('DIVIDE', () => {
  let sandbox;
  let vm;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    vm = {
      memory: {
        getLoc: sandbox.stub()
      },
      register: {
        accumulator: 0
      }
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should divide the accumulator by a value from a specific memory location', () => {
    const location = 10;
    const value = 2;
    vm.memory.getLoc.withArgs(location).returns(value);
    vm.register.accumulator = 100;

    DIVIDE(vm, location);

    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(vm.register.accumulator).to.equal(100 / value);
  });

  it('should throw an error when dividing by zero', () => {
    const location = 10;
    const value = 0;
    vm.memory.getLoc.withArgs(location).returns(value);
    vm.register.accumulator = 100;

    expect(() => DIVIDE(vm, location)).to.throw("Division by zero");
    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(vm.register.accumulator).to.equal(100); // Accumulator should remain unchanged
  });
});