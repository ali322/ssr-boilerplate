import 'vue'
import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import moxios from 'moxios'
import mutations from '@/index/mutation'
import * as actions from '@/index/action'
import * as constants from '@/index/constant'
import app from '@/index/app.vue'
import { testAction } from '../helper'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('mutations', () => {
  it(constants.RESPONSE_EVENTS, () => {
    let state = {}
    mutations[constants.RESPONSE_EVENTS](state)
    expect(state.eventsFetched).toBe(true)
  })
})

describe('actions', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('should RESPONSE_EVENTS when fetched', done => {
    let ret = {
      status: 'ok',
      data: [],
    }
    let expectedMutations = [
      { type: constants.REQUEST_EVENTS },
      { type: constants.RESPONSE_EVENTS, payload: ret.data },
    ]

    moxios.stubRequest('/mock/events', {
      status: 200,
      responseText: JSON.stringify(ret),
    })

    testAction(actions.fetchEvents, [], {}, actions, expectedMutations, done)
  })
})

describe('component', () => {
  let wrapper, store, fetchEvents
  beforeEach(() => {
    fetchEvents = jest.fn()
    store = new Vuex.Store({
      state: { index: { events: [] } },
      actions: { fetchEvents },
    })
    wrapper = shallow(app, {
      localVue,
      store,
    })
    wrapper.setMethods({ fetchEvents })
  })
  it('should render correct', () => {
    expect(wrapper.findAll('.content').length).toBe(1)
  })
  it('should call handleRefresh once after click', () => {
    const button = wrapper.find('.refresh-btn')
    button.trigger('click')
    expect(fetchEvents).toHaveBeenCalledTimes(1)
  })
})
