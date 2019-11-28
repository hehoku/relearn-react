import React, { Component } from 'react'
import './index.css'

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
      const { username, content } = this.state
      this.props.onSubmit({ username, content, createdTime: +new Date() })
      window.localStorage.setItem('content', content)
    }
    this.setState({
      content: ''
    })
    e.preventDefault()
  }

  _saveUsername(username) {
    window.localStorage.setItem('username', username)
  }
  _loadUsername() {
    const username = window.localStorage.getItem('username')
    if (username) {
      this.setState({
        username
      })
    }
  }

  handleBlur(e) {
    this._saveUsername(e.target.value)
  }

  componentWillMount() {
    this._loadUsername()
  }

  componentDidMount() {
    this.textarea.focus()
  }

  render() {
    return (
      <div>
        <form>
          <label>
            用户名:
            <input
              onBlur={this.handleBlur.bind(this)}
              onChange={this.handleUserNameChange.bind(this)}
              value={this.state.username}
              type="text"
            />
          </label>
          <br />
          <label>
            评论 :
            <textarea
              ref={(ref) => {
                this.textarea = ref
              }}
              onChange={this.handleContentChange.bind(this)}
              value={this.state.content}
              type="text"
            ></textarea>
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
