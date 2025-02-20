export function formatTestFile(contents) {
  const test_data = contents;
  const tests_lines = test_data.split("\n\n").map((x) => x.split("\n"));
  let tests = [];
  tests_lines.forEach((test_lines, _index) => {
    let newTest = { program: [] };
    test_lines.forEach((val, index) => {
      if (index === 0) {
        newTest.title = val;
      } else if (index === 1) {
        newTest.args = val.split(" ");
      } else if (index === test_lines.length - 2) {
        newTest.mem_loc = parseFloat(val);
      } else if (index === test_lines.length - 1) {
        newTest.expected_r = val;
      } else {
        let float_val = parseFloat(val);
        if (
          isNaN(float_val) ||
          float_val.toString() !== val.replace(/\+/g, "")
        ) {
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
