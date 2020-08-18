// workers/add.js
import { expose } from "threads/worker";
import addFunc from '../functions/add.js';

expose(
  function add(a, b) {
    return addFunc(a, b);
  }
);