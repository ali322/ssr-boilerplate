let { markupOfRoute } = require('../lib')
let bundle = require('../../dist/server/bundle/index').default

exports.index = async function (ctx, next) {
  let markup = ''
  let initialState = { flag: 9527 }
  try {
    markup = await markupOfRoute('index', initialState, ctx)
  } catch (err) {
    throw err
  }
  await ctx.render('index', {
    markup,
    initialState: JSON.stringify(ctx.hydrateState)
  })
}

exports.error = async function (ctx, next) {
  try {
    await next()
  } catch (err) {
    await ctx.render('error', { msg: err.message })
  }
}

exports.notFound = async function (ctx) {
  await ctx.render('404')
}
