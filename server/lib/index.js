let ReactDOMServer = require('react-dom/server')
let React = require('react')
let { resolve } = require('path')

exports.markupOfRoute = (route, initialState, ctx) => {
  let creatApp = require(resolve('dist', 'server', 'bundle', `${route}.js`))
    .default
  return creatApp(ctx, initialState).then(({ app, state }) => {
    ctx.hydrateState = state
    return ReactDOMServer.renderToString(app)
  })
}
