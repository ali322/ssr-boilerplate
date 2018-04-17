let app = require('./server/bootstrap')
let port = process.env.APP_PORT || 3000

// if not need mock api,just replace follow with
app.listen(port, () => {
  console.log(`server is running at ${port}`)
})

// let server = require('nva-server')({
//   log: false,
//   mock: { path: '.nva/mock/*.js' }
// })

// server.use(app.callback())

// server.listen(port, () => {
//   console.log(`server is running at ${port}`)
// })
