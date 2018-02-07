import { Selector } from 'testcafe'

fixture('get started').page('http://127.0.0.1:9090/')

test('my first test', async t => {
  await t.expect(Selector('.event').count).gt(0)
})