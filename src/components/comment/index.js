import React from 'react'
import './index.css'

const Comment = (props) => {
  return (
    <div>
      <span>{props.username}: </span>
      <span>{props.content}</span>
    </div>
  )
}

export default Comment
