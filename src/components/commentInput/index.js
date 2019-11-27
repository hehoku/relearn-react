import React, {Component} from 'react'

class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUserNameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(e) {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({
      content: ''
    })
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <form>
          <label>
            用户名:
            <input onChange={this.handleUserNameChange.bind(this)} value={this.state.username} type='text' />
          </label>
          <label>
            评论内容:
            <input onChange={this.handleContentChange.bind(this)} value={this.state.content} type='text' />
          </label>
          <label>
            <button onClick={this.handleSubmit.bind(this)}>发布</button>
          </label>
        </form>
      </div>
    )
  }
}

export default CommentInput
