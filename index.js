// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module, {
  "cjs": true,
  "mode": "auto",
  "await": true
})
console.log('___ CCB');
module.exports = require("./bin/start.js")