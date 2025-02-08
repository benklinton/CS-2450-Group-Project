const { expect } = require('chai');
const sinon = require('sinon');
const LOAD = require('../src/UVSim/functions/LOAD');

describe('LOAD', () => {
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

  it('should load a value from a specific memory location into the accumulator', () => {
    const location = 10;
    const value = 42;
    vm.memory.getLoc.withArgs(location).returns(value);

    LOAD(vm, location);

    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(vm.register.accumulator).to.equal(value);
  });

  it('should correctly load updated values from memory into the accumulator', () => {
    const location1 = 10;
    const value1 = 42;
    const location2 = 20;
    const value2 = 58;
    vm.memory.getLoc.withArgs(location1).returns(value1);
    vm.memory.getLoc.withArgs(location2).returns(value2);

    LOAD(vm, location1);
    expect(vm.memory.getLoc.calledWith(location1)).to.be.true;
    expect(vm.register.accumulator).to.equal(value1);

    LOAD(vm, location2);
    expect(vm.memory.getLoc.calledWith(location2)).to.be.true;
    expect(vm.register.accumulator).to.equal(value2);
  });
});