let Router = require('koa-router')
let { index, detail, notFound } = require('./controller/main')

const router = new Router()

router.get('/', index)
router.get('/detail/:id', detail)
router.all('*', notFound)

module.exports = router
