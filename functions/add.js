import sleep from "atomic-sleep";
import _ from "lodash";

export default function (a, b) {
  sleep(8000)
  console.log('[In Function] Test A', a ?? b);
  return a + b;
}