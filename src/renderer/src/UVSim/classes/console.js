export class VMConsole {
  output = [];

  constructor() {
    this.output = [];
    // this.log.push("Memory initialized");
  }
  log(value) {
    this.output.push(value);
  }
}
