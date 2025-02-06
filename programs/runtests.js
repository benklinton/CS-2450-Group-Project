const fs = require("fs");
const { VirtualMachine }  = require("../src/UVSim/classes/virtualMachine");
const readLineSync = require("readline-sync");
const stream = require('stream');
const currTestPath = "UVSimTests.txt"
const outstream = console.log;
const errstream = console.error;

/**
 * Tests if a given string can be represented as a number
 * @param {string} value 
 * @returns {boolean}
 */

/**
 * Formats a given file of tests
 * @param {string} testPath
 * Path of file of tests
 * @returns {array}
 * Contains array of formattted tests
*/
function formatTestFile(testPath) {
    const test_data = fs.readFileSync(testPath, "utf-8").trim();
    const tests_lines = test_data.split("\n\n").map(x => x.split("\n"));
    tests = [];
    tests_lines.forEach((test_lines,_index) => {
        newTest = {program:[]};
        test_lines.forEach((val,index) => {
            if (index == 0) {
                newTest.title = val;
            } else if (index == 1) {
                newTest.args = val.split(" ");
            } else if (index == test_lines.length - 2) {
                newTest.mem_loc = parseFloat(val);
            } else if (index == test_lines.length - 1) {
                newTest.expected_r = val;
            } else {
                float_val = parseFloat(val);
                if (isNaN(float_val) || float_val.toString() != val.replace(/\+/g,"")) {
                    newTest.program = val;
                } else {
                    newTest.program.push(float_val);
                }
            }
        });
        tests.push(newTest);
    });
    return tests;
}

function main() {
    outputs = [];
    passed = 0;
    failed = 0;
    console.log = function(...args) {
        outputs.push(args.join(" ").replace("\n","\t"));
        outstream(...args);
    }
    console.error = function(...args) {
        outputs.push(args.join(" ").replace("\n","\t"));
        errstream(...args);
    }
    const all_tests = formatTestFile(currTestPath);
    for (i = 0; i < all_tests.length; i++) {
        const test = all_tests[i];
        outputs = [];
        outstream(test.program);
        let vm;
        if (typeof test.program == "string") {
            vm = new VirtualMachine(test.program);
        } else {
            vm = new VirtualMachine();
            vm.memory.words.splice(0,test.program.length,...test.program);
        }
        //Override method to put in args string instead
        vm.reader.question = function(_input) {return test.args.pop()};
        try {
            vm.run();
        } catch (err) {
            console.error(err.message);
            vm.r.isEnd = true;
        }
        const mem_loc = test.mem_loc;
        if (mem_loc != -1 && -99 <= mem_loc && mem_loc <= 99 && Number.isInteger(mem_loc)) {
            console.log(vm.memory.words[test.mem_loc]);
        }
        const str_outputs = outputs.join(",");
        if (str_outputs == test.expected_r) {
            passed += 1;
        } else {
            failed += 1;
            errstream(`Failed test - ${test.title}
Expected: ${test.expected_r}
Actual Result: ${str_outputs.replace(/\t/g,"\n")}`);
        }

    }
    outstream(`${passed} tests passed; ${failed} tests failed`);
    process.exit(failed > 0 ? 1 : 0);
}

main();
