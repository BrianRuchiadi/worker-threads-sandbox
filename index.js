// master.js
import { spawn, Thread, Worker } from "threads"

async function main() {
  // let a = a ?? 10;
  // console.log('test a', a);

  const add = await spawn(new Worker("./workers/add.js"));
  const sum = await add(2, 3);

  console.log(`2 + 3 = ${sum}`)

  await Thread.terminate(add)
}

main().catch(err => {
  console.log('error during running main', err);
})