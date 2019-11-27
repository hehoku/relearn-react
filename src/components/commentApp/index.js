import React, {Component} from 'react'
import CommentList from '../commentList'
import CommentInput from '../commentInput'

class CommentApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        {
          username: 'Hehoku',
          content: 'I am learning React!'
        },
        {
          username: 'Hehoku',
          content: 'I am learning React And Redux!'
        }
      ]
    }
  }
  handleSubmiComment(comment) {
    console.log(comment)
    this.setState((state, props) => {
      return {
        comments: [].concat(state.comments, comment)
      }
    })
  }
  render() {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmiComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
