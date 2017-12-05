import React from 'react'
import { shallow } from 'enzyme'
import { Index } from '@/index/app.jsx'

describe('index component', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      actions: {
        fetchEvents: jest.fn()
      },
      events: []
    }
    wrapper = shallow(<Index {...props} />)
  })
  it('should render correct', () => {
    expect(wrapper.find('.content').length).toBe(1)
  })

  it('should call handleRefresh once after click', () => {
    const button = wrapper.find('.refresh-btn')
    button.simulate('click', {
      target: { value: '' },
      preventDefault: () => {}
    })
    expect(props.actions.fetchEvents).toHaveBeenCalledTimes(1)
  })
})
