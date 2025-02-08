const { expect } = require('chai');
const sinon = require('sinon');
const STORE = require('../src/UVSim/functions/STORE');

describe('STORE', () => {
  let sandbox;
  let vm;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    vm = {
      memory: {
        setLoc: sandbox.stub()
      },
      register: {
        accumulator: 0
      }
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should store the value of the accumulator into a specific memory location', () => {
    const location = 10;
    const accumulatorValue = 42;
    vm.register.accumulator = accumulatorValue;

    STORE(vm, location);

    expect(vm.memory.setLoc.calledOnceWith(location, accumulatorValue)).to.be.true;
  });

  it('should correctly store the updated value of the accumulator into a specific memory location', () => {
    const location = 20;
    const initialAccumulatorValue = 100;
    const updatedAccumulatorValue = 200;
    vm.register.accumulator = initialAccumulatorValue;

    STORE(vm, location);
    expect(vm.memory.setLoc.calledOnceWith(location, initialAccumulatorValue)).to.be.true;

    vm.register.accumulator = updatedAccumulatorValue;
    STORE(vm, location);
    expect(vm.memory.setLoc.calledWith(location, updatedAccumulatorValue)).to.be.true;
  });
});