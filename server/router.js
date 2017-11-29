let Router = require('koa-router')
let { index, notFound } = require('./controller/main')

const router = new Router()

router.use(index)
router.all('*', notFound)

module.exports = router
