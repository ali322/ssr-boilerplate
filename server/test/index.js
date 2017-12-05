import supertest from 'supertest'
import test from 'ava'

process.env.NODE_ENV = 'production'

let app = require('../bootstrap')

function request () {
  return supertest(app.listen())
}

test.cb('Routes GET / ', t => {
  request()
    .get('/')
    .expect(200, t.end)
})
