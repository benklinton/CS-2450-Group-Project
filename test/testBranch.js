const { expect } = require('chai');
const sinon = require('sinon');
const BRANCH = require('../src/UVSim/functions/BRANCH');

describe('BRANCH', () => {
  let sandbox;
  let vm;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    vm = {
      register: {
        pc: 0
      }
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set the program counter (pc) to a specific memory location', () => {
    const location = 10;

    BRANCH(vm, location);

    expect(vm.register.pc).to.equal(location);
  });

  it('should correctly update the program counter (pc) to a new memory location', () => {
    const initialLocation = 10;
    const newLocation = 20;

    BRANCH(vm, initialLocation);
    expect(vm.register.pc).to.equal(initialLocation);

    BRANCH(vm, newLocation);
    expect(vm.register.pc).to.equal(newLocation);
  });
});