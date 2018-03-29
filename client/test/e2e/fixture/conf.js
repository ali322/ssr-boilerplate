module.exports = {
  process: runner => runner.startApp('node ./client/test/e2e/fixture/server.js'),
  spec: ['./client/test/e2e/spec/demo.js']
}
