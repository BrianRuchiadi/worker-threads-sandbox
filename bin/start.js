import _ from "lodash";
import { spawn, Thread, Worker } from "threads"

async function main() {
  console.log('Test A');
  console.log('Test B', 1 ?? 10);
  console.log('Test C', _.sum([1, 3, 5]));

  const add1 = await spawn(new Worker("../workers/add.mjs"));
  const add2 = await spawn(new Worker("../workers/add.mjs"));
  console.log(`A`);
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