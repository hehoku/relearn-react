import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeString: ''
    }
  }

  _updateTimeString() {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString:
        duration > 60
          ? `  ${Math.round(duration / 60)}分钟前`
          : `  ${Math.round(Math.max(duration, 1))}秒前`
    })
  }

  handleDelete() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(this._updateTimeString.bind(this), 5000)
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  render() {
    return (
      <div>
        <span>{this.props.comment.username}: </span>
        <span>{this.props.comment.content}</span>
        <span>{this.state.timeString}</span>
        <button onClick={this.handleDelete.bind(this)}>删除</button>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object
}

export default Comment
