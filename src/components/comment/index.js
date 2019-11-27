import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Comment = (props) => {
  return (
    <div>
      <span>{props.username}: </span>
      <span>{props.content}</span>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Comment
