import { GlobalContext } from "../Context/GlobalContext";
import { MessagingContext } from "../Context/MessagingContext";
import { formatTestFile } from "../UVSim/tests/testFormatter";
import { useContext } from "react";

export const useTesting = () => {
  const { vm } = useContext(GlobalContext);
  const { retrieveFile } = useContext(MessagingContext);
  let passed = 0;
  const runTests = async (fileContents) => {
    const formatted = formatTestFile(fileContents);
    console.log(formatted);
    vm.r.isTesting = true;
    for (let i = 0; i < formatted.length; i++) {
      const test = formatted[i];
      vm.c.log(`------------ ${test.title} ------------`, "log");
      let consolePos = vm.c.outputs.length;
      //load the program, if it's a refereence to a file get the file contents, otherwise use the program
      let program = test.program;
      const hasAlpha = /[A-Za-z]/.test(program);
      if (program.includes(".") || hasAlpha) {
        try {
          program = await retrieveFile(program);
        } catch (err) {
          vm.c.log(err.message, "error");
          console.error(err);
          program = null;
        }
      } else {
        program = program.join("\n");
      }
      vm.memory.clear();
      if (program) vm.loadProgram(program);
      //   vm.c.clear();
      vm.r.isTesting = true;
      let t = 0;
      while ((vm.r.isWaitingForInput || t === 0) && !vm.r.isEnd) {
        vm.run();
        t = 1;
        vm.sendInput(test.args.shift());
      }
      const result = vm.c.outputs
        .slice(consolePos, vm.c.outputs.length)
        .map((o) => o.msg)
        .join(",");
      if (result === test.expected_r) {
        vm.c.log(`Test Passed`, "success");
        vm.c.outputs[consolePos - 1].type = "success";
        passed += 1;
      } else {
        vm.c.outputs[consolePos - 1].type = "error";
        vm.c.log("Test Failed", "error");
        vm.c.log(`Expected: ${test.expected_r}`, "error");
        vm.c.log(`Actual: ${result}`, "error");
      }
    }
    vm.c.log(
      `Tests Passed: ${passed}/${formatted.length}`,
      passed === formatted.length ? "success" : "error"
    );
  };

  return { runTests };
};
