const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('VirtualMachine', () => {
    let sandbox;
    let processExitStub;
    let consoleErrorStub;
    let VirtualMachineStub;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        processExitStub = sandbox.stub(process, 'exit');
        consoleErrorStub = sandbox.stub(console, 'error');
        VirtualMachineStub = sandbox.stub().returns({
            run: sandbox.stub(),
            tick: sandbox.stub(),
            r : {
                pc: 0,
                isEnd: false
            }
        });
        
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should halt when completed', () => {
        const args = ['node', 'index.js', './programs/Test1.txt'];
        sandbox.stub(process, 'argv').value(args);

        proxyquire('../index', {
            './src/UVSim/classes/virtualMachine': { VirtualMachine: VirtualMachineStub }
        });

        expect(VirtualMachineStub.calledOnce).to.be.true;
        expect(processExitStub.called).to.be.false;

    });

    it('should halt with an error when no program is provided', () => {
        const args = ['node', 'index.js'];
        sandbox.stub(process, 'argv').value(args);

        proxyquire('../index', {
            './src/UVSim/classes/virtualMachine': { VirtualMachine: VirtualMachineStub }
        });

        expect(VirtualMachineStub.calledOnce).to.be.true;
        expect(processExitStub.called).to.be.true;
        expect(consoleErrorStub.called).to.be.true;
    });

    it('should stop when the program counter exceeds memory bounds', () => {
        const args = ['node', 'index.js', './programs/Test2.txt'];
        sandbox.stub(process, 'argv').value(args);
        VirtualMachineStub().tick();
        VirtualMachineStub().r.pc = 100;
        if(VirtualMachineStub().r.pc > 99) {
            console.error("Program counter exceeded memory bounds. Halting program");
            VirtualMachineStub().r.isEnd = true;
        }

        proxyquire('../index', {
            './src/UVSim/classes/virtualMachine': { VirtualMachine: VirtualMachineStub }
        });


        expect(VirtualMachineStub.called).to.be.true;
        expect(VirtualMachineStub().run.called).to.be.true;
        expect(VirtualMachineStub().tick.called).to.be.true;
        expect(VirtualMachineStub().r.pc).to.equal(100);
        expect(VirtualMachineStub().r.isEnd).to.be.true;
        expect(consoleErrorStub.calledWith('Program counter exceeded memory bounds. Halting program')).to.be.true;
    });
});
