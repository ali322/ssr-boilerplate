let app = require('../../../../dist/server/bootstrap')

let server = require('nva-server')({
    log: false,
    mock: '.nva/mock/*.json'
})

server.use(app.callback())

module.exports = server.listen(3000)
