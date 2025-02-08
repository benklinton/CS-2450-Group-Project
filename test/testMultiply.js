const { expect } = require('chai');
const sinon = require('sinon');
const MULTIPLY = require('../src/UVSim/functions/MULTIPLY');

describe('MULTIPLY', () => {
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

  it('should multiply the accumulator by a value from a specific memory location', () => {
    const location = 10;
    const value = 2;
    vm.memory.getLoc.withArgs(location).returns(value);
    vm.register.accumulator = 100;

    MULTIPLY(vm, location);

    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(vm.register.accumulator).to.equal(100 * value);
  });
});