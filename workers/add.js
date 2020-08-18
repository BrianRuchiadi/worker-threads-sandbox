import _ from "lodash";
import { expose } from "threads/worker";
import fnAdd from '../functions/add.js';

expose(
  function (a, b) {
    console.log('[In Worker] Test A', a ?? b);
    return _.sum([fnAdd(a, b)]);
  }
);