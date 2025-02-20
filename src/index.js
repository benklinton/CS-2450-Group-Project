const { getFilesFromProgramFolder } = require("./files/getFiles");
const { startElectron } = require("/electron/init");
const { VirtualMachine } = require("/UVSim/classes/virtualMachine");

//main file from which the program is initiated
function main() {
  const files = getFilesFromProgramFolder();
  console.log(files);
  startElectron();
  // const args = process.argv.slice(2);

  // if (args.length < 1) {
  //   console.error("Usage: node index.js <program_file>");
  //   process.exit(1);
  // }
  // let vm = new VirtualMachine(args[0]);
  // //Moving run command here for reusability
  // vm.run();
}

main();
