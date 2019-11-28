import React, { Component } from 'react'
import CommentList from '../commentList'
import CommentInput from '../commentInput'

class CommentApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    this._loadComments()
  }

  handleSubmiComment(comment) {
    console.log(comment)
    const comments = this.state.comments
    comments.push(comment)
    this.setState({comments})
    this._saveComments(comments)
  }

  handleDeleteComment(index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({
      comments
    })
    this._saveComments(comments)
  }

  _loadComments() {
    let comments = window.localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  _saveComments(comments) {
    window.localStorage.setItem('comments', JSON.stringify(comments))
  }

  render() {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmiComment.bind(this)} />
        <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
