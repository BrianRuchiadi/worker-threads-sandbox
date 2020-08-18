import _ from "lodash";
import { expose } from "threads/worker";
import fnAdd from '../functions/add.mjs';

expose(
  function add(a, b) {
    return _.sum([fnAdd(a, b), fnAdd(a, b)]);
  }
);