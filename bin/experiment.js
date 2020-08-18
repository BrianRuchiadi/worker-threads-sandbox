import _ from "lodash";
import { spawn, Thread, Worker } from "threads"

async function main() {
  console.log('Test Babel', null ?? 10);
  const add = await spawn(new Worker("../workers/add.js"));
  const sum = await add(2, 3);
  console.log(`2 + 3 = ${sum}`)
  await Thread.terminate(add);
}

main();