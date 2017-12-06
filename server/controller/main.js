let { markupOfRoute } = require('../lib')

exports.index = async function (ctx) {
  let markup = ''
  let initialState = { flag: 9527 }
  try {
    markup = await markupOfRoute('index', initialState, ctx)
  } catch (err) {
    throw err
  }
  ctx.body = markup
}

exports.error = async function (ctx, next) {
  try {
    await next()
  } catch (err) {
    if (err.code === '404') {
      await ctx.render('404')
    } else {
      await ctx.render('error', { msg: err.message })
    }
  }
}

exports.notFound = async function (ctx) {
  await ctx.render('404')
}
