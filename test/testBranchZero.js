const { expect } = require('chai');
const sinon = require('sinon');
const BRANCHZERO = require('../src/UVSim/functions/BRANCHZERO');

describe('BRANCHZERO', () => {
  let sandbox;
  let vm;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    vm = {
      register: {
        pc: 0,
        accumulator: 0
      }
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set the program counter (pc) to a specific memory location if the accumulator is zero', () => {
    const location = 10;
    vm.register.accumulator = 0;

    BRANCHZERO(vm, location);

    expect(vm.register.pc).to.equal(location);
  });

  it('should not change the program counter (pc) if the accumulator is non-zero', () => {
    const initialLocation = 0;
    const location = 10;
    vm.register.accumulator = 5;

    BRANCHZERO(vm, location);

    expect(vm.register.pc).to.equal(initialLocation);
  });

  it('should correctly update the program counter (pc) to a new memory location if the accumulator is zero', () => {
    const initialLocation = 0;
    const newLocation = 20;
    vm.register.accumulator = 0;

    BRANCHZERO(vm, newLocation);
    expect(vm.register.pc).to.equal(newLocation);
  });
});