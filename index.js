// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module, {
  "cjs": true,
  "mode": "auto",
  "await": true
})
module.exports = require("./bin/start.js")