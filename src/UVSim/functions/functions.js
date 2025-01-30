const { ADD } = require("./ADD");
const { BRANCH } = require("./BRANCH");
const { BRANCHNEG } = require("./BRANCHNEG");
const { BRANCHZERO } = require("./BRANCHZERO");
const { DIVIDE } = require("./DIVIDE");
const { HALT } = require("./HALT");
const { LOAD } = require("./LOAD");
const { MULTIPLY } = require("./MULTIPLY");
const { READ } = require("./READ");
const { STORE } = require("./STORE");
const { SUBTRACT } = require("./SUBTRACT");
const { WRITE } = require("./WRITE");

const functions = {
  10: READ,
  11: WRITE,
  20: LOAD,
  21: STORE,
  30: ADD,
  31: SUBTRACT,
  32: DIVIDE,
  33: MULTIPLY,
  40: BRANCH,
  41: BRANCHNEG,
  42: BRANCHZERO,
  43: HALT,
};

module.exports = { functions };
