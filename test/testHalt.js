const { expect } = require('chai');
const sinon = require('sinon');
const { HALT } = require('../src/UVSim/functions/HALT');

describe('HALT', () => {
  let sandbox;
  let vm;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    vm = {
      register: {
        isEnd: false
      }
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set the isEnd flag to true', () => {
    HALT(vm);

    expect(vm.register.isEnd).to.be.true;
  });

  it('should keep the isEnd flag true if it is already true', () => {
    vm.register.isEnd = true;

    HALT(vm);

    expect(vm.register.isEnd).to.be.true;
  });
});