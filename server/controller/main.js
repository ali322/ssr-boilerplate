let { markupOfRoute } = require('../lib')

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

exports.detail = async function (ctx, next) {
  let markup = ''
  let initialState = { id: ctx.params.id }
  try {
    markup = await markupOfRoute('detail', initialState, ctx)
  } catch (err) {
    throw err
  }
  await ctx.render('detail', {
    markup,
    initialState: JSON.stringify(ctx.hydrateState)
  })
}

exports.error = async function (ctx, next) {
  try {
    await next()
  } catch (err) {
    if (err.code === 404) {
      await ctx.render('404')
    } else {
      await ctx.render('error', { msg: err.message })
    }
  }
}

exports.notFound = async function (ctx) {
  await ctx.render('404')
}
