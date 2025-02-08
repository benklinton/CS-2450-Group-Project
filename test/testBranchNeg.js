const { expect } = require('chai');
const sinon = require('sinon');
const BRANCHNEG = require('../src/UVSim/functions/BRANCHNEG');

describe('BRANCHNEG', () => {
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

  it('should set the program counter (pc) to a specific memory location if the accumulator is negative', () => {
    const location = 10;
    vm.register.accumulator = -5;

    BRANCHNEG(vm, location);

    expect(vm.register.pc).to.equal(location);
  });

  it('should not change the program counter (pc) if the accumulator is non-negative', () => {
    const initialLocation = 0;
    const location = 10;
    vm.register.accumulator = 5;

    BRANCHNEG(vm, location);

    expect(vm.register.pc).to.equal(initialLocation);
  });

  it('should correctly update the program counter (pc) to a new memory location if the accumulator is negative', () => {
    const initialLocation = 0;
    const newLocation = 20;
    vm.register.accumulator = -10;

    BRANCHNEG(vm, newLocation);
    expect(vm.register.pc).to.equal(newLocation);
  });
});