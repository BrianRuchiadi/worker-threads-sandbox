import _ from "lodash";
import { expose } from "threads/worker";
import fnAdd from '../functions/add.mjs';

// expose(
//   function add(a, b) {
//     const s = _.sum([a, b]);
//     return addFunc(s, a ?? b);
//   }
// );

expose(
  function add(a, b) {
    return _.sum([fnAdd(a, b), fnAdd(a, b)]);
  }
);