export class VMConsole {
  outputs = [];

  constructor(rerender) {
    this.outputs = [];
    this.rerender = rerender;
    // this.log.push("Memory initialized");
  }
  log(value, type = "log") {
    this.outputs.push({ msg: value, type: type });
    this.rerender();
  }
  clear() {
    this.outputs = [];
    this.rerender();
  }
}
