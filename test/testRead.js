const { expect } = require('chai');
const sinon = require('sinon');
const { READ } = require('../src/UVSim/functions/READ');

describe('READ', () => {
    let sandbox;
    let vm;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        vm = {
            reader: {
                question: sandbox.stub()
            },
            memory: {
                setLoc: sandbox.stub()
            }
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should read a valid word from the keyboard into a specific location in memory', () => {
        const input = "42"
        const location = 10;
        vm.reader.question.returns(input);

        READ(vm, location);

        expect(vm.reader.question.calledOnce).to.be.true;
        expect(vm.memory.setLoc.calledOnceWith(location, parseInt(input))).to.be.true;
    });

    it('should throw an error for invalid input', () => {
        const invalidInput = "abc";
        const location = 10;

        vm.reader.question.returns(invalidInput);

        expect(() => READ(vm, location)).to.throw("Invalid input");
        expect(vm.memory.setLoc.notCalled).to.be.true;
    });
});