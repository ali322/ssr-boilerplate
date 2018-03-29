module.exports = {
    process: runner => runner.startApp('node ./client/test/e2e/fixture/server.js', 3000),
    spec: ['./client/test/e2e/spec/demo.js']
}