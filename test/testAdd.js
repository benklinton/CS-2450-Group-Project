const { expect } = require('chai');
const sinon = require('sinon');
const ADD = require('../src/UVSim/functions/ADD');

describe('ADD', () => {
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

  it('should add a value from a specific memory location to the accumulator', () => {
    const location = 10;
    const value = 42;
    vm.memory.getLoc.withArgs(location).returns(value);

    ADD(vm, location);

    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(vm.register.accumulator).to.equal(value);
  });
});



