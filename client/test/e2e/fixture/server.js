let app = require('../../../../server/bootstrap')

let server = require('nva-server')({
  log: false,
  mock: { path: '.nva/mock/*.js' }
})

server.use(app.callback())

module.exports = server.listen(3000)
