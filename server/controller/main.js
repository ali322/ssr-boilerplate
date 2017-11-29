let { markupOfRoute } = require('../lib')

exports.index = async function (ctx) {
  let html = ''
  try {
    html = await markupOfRoute('index', ctx)
  } catch (err) {
    throw err
  }
  ctx.body = html
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
