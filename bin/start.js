import _ from "lodash";
import { spawn, Thread, Worker } from "threads";

async function main() {
  console.log('[In Parent] Test A', 1 ?? 10);
  console.log('[In Parent] Test B', _.sum([1, 3, 5]));
  // console.log('[In Parent] Test C', { spawn, Thread, Worker });

  const add1 = await spawn(new Worker("./workers/add.js"));
  // const add1 = await spawn(new Worker("../functions/add.js"));
  // const add1 = await spawn(new Worker("file:///C:/xampp/htdocs/worker-threads-sandbox/workers/add.js"));
  const add2 = await spawn(new Worker("./workers/add.js"));
  const sum1 = add1(2, 3);
  const sum2 = add2(4, 5);
  const results = await Promise.all([sum1, sum2]);
  console.log('___ results', { results });
  await Thread.terminate(add1);
  await Thread.terminate(add2);
}

main().catch(err => {
  console.log('error during running main', err);
});