import { connected } from 'redux-container'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import * as actions from './action'

export class Index extends Component {
  static propTypes = {
    actions: PropTypes.object,
    events: PropTypes.array
  }
  @autobind
  handleRefresh(e) {
    e && e.preventDefault()
    const { fetchEvents } = this.props.actions
    fetchEvents()
  }
  render() {
    let { events } = this.props
    events = events || []
    return (
      <div className="container">
        <div className="header">
          Github Events{' '}
          <button
            className="refresh-btn refresh-icon"
            onClick={this.handleRefresh}
          />
        </div>
        <div className="content">
          {events.map(event => (
            <div className="event" key={event.id}>
              <a href={`/detail/${event.id}`}>
                <div className="event-title">
                  <img src={event.avatar} alt="" />
                  <span>
                    <p>{event.name}</p>
                    <p>{event.created_at}</p>
                  </span>
                  <i className="fa fa-caret-right" />
                </div>
                <p>
                  {event.type} In <b>{event.repo}</b>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default connected(state => state, actions)(Index)
