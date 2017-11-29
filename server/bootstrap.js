let Koa = require('koa')
let { join, resolve } = require('path')
let serveStatic = require('koa-static')
let bodyParser = require('koa-body')
let methodOverride = require('koa-methodoverride')
let session = require('koa-session-minimal')
let views = require('koa-views')
let pkgJSON = require('../package.json')
let router = require('./router')
let { error } = require('./controller/main')

const app = new Koa()

app.use(serveStatic(join('dist', 'client')))
app.use(bodyParser())
app.use(methodOverride())
app.use(
  session({
    key: pkgJSON.name,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // expired after one day
  })
)

app.use(error)
app.on('err', err => {
  console.log(`server error: ${err}`)
})

app.use(
  views(resolve('server', 'view'), { map: { html: 'handlebars' }, extension: 'html' })
)

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
