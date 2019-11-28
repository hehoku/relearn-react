import React, { Component } from 'react'
import Comment from '../comment'

class CommentList extends Component {
  constructor(props) {
    super(props)
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((item, index) => (
          <Comment
            key={item.createdTime}
            index={index}
            comment={item}
            onDeleteComment={this.handleDeleteComment.bind(this)}
          />
        ))}
      </div>
    )
  }
}

export default CommentList
