import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connected } from 'redux-container'
import * as actions from './action'

export class Detail extends Component {
  static propTypes = {
    actions: PropTypes.object,
    detail: PropTypes.object
  }
  componentDidMount() {
    const { fetchDetail } = this.props.actions
    fetchDetail({ id: this.props.id })
  }
  render() {
    const { detail } = this.props
    if (!detail) {
      return null
    }
    return (
      <div className="container">
        <div className="header header-with-btn">
          <button className="btn" onClick={() => window.history.back()}>
            <i className="fa fa-arrow-left" />
          </button>
          {detail.name}
        </div>
        <div className="content">
          <div className="detail">
            <img src={detail.avatar} alt="" />
            <p>Title: {detail.title}</p>
            <p>Created at: {detail.created_at}</p>
            <p>{detail.message}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default connected(state => state, actions)(Detail)
