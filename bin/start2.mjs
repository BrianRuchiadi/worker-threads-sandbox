import _ from "lodash";
import { spawn, Thread, Worker } from "threads"

async function main() {
  console.log('Test A');
  console.log('Test B', 2 ?? 10);
  console.log('Test C', _.sum([2, 3, 5]));

  const add = await spawn(new Worker("../workers/add.js"));
  const sum = await add(2, 3);
  console.log(`2 + 3 = ${sum}`)
  await Thread.terminate(add);
}

main().catch(err => {
  console.log('error during running main', err);
})