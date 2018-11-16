let path = require('path')
let { createBundleRenderer } = require('vue-server-renderer')
let lrcCache = require('lru-cache')
let { readFileSync } = require('fs')

exports.markupOfRoute = (route, initialState, ctx) => {
  return new Promise((resolve, reject) => {
    const app = readFileSync(
      path.resolve('dist', 'server', 'bundle', `${route}.js`),
      'utf-8'
    )
    const template = readFileSync(
      path.resolve('server', 'view', `${route}.html`),
      'utf-8'
    )
    ctx.state = { [route]: initialState }
    const renderer = createBundleRenderer(app, {
      template,
      runInNewContext: false,
      cache: lrcCache({
        max: 1000,
        maxAge: 1000 * 60 * 15 // expired after 15 mins
      })
    })
    renderer.renderToString(ctx, (err, html) => {
      if (err) reject(err)
      resolve(html)
    })
  })
}
