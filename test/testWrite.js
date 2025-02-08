const { expect } = require('chai');
const sinon = require('sinon');
const { WRITE } = require('../src/UVSim/functions/WRITE');

describe('WRITE', () => {
  let sandbox;
  let vm;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    vm = {
      memory: {
        getLoc: sandbox.stub()
      }
    };
    sandbox.stub(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should write a word from a specific location in memory to the screen', () => {
    const location = 10;
    const value = 42;
    vm.memory.getLoc.withArgs(location).returns(value);

    WRITE(vm, location);

    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(console.log.calledOnceWith(value)).to.be.true;
  });

  it('should handle writing a word from an empty memory location', () => {
    const location = 10;
    const value = 0;
    vm.memory.getLoc.withArgs(location).returns(value);

    WRITE(vm, location);

    expect(vm.memory.getLoc.calledOnceWith(location)).to.be.true;
    expect(console.log.calledOnceWith(value)).to.be.true;
  });
});