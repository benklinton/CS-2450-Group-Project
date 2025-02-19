import { ADD } from "./ADD.js";
import { BRANCH } from "./BRANCH.js";
import { BRANCHNEG } from "./BRANCHNEG.js";
import { BRANCHZERO } from "./BRANCHZERO.js";
import { DIVIDE } from "./DIVIDE.js";
import { HALT } from "./HALT.js";
import { LOAD } from "./LOAD.js";
import { MULTIPLY } from "./MULTIPLY.js";
import { READ } from "./READ.js";
import { STORE } from "./STORE.js";
import { SUBTRACT } from "./SUBTRACT.js";
import { WRITE } from "./WRITE.js";

export const functions = {
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
