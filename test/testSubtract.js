const { expect } = require('chai');
const sinon = require('sinon');
const SUBTRACT = require('../src/UVSim/functions/SUBTRACT');

describe('SUBTRACT', () => {
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

  it('should subtract a value from a specific memory location from the accumulator', () => {
    const location = 10;
    const value = 42;
    vm.memory.getLoc.withArgs(location).returns(value);
    vm.register.accumulator = 100;

    SUBTRACT(vm, location);

    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(vm.register.accumulator).to.equal(100 - value);
  });
});