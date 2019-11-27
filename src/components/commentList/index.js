import React from 'react'
import Comment from '../comment'

const CommentList = (props) => {
  return (
    <div>
      {props.comments.map((item) => (
        <Comment key={item.content} username={item.username} content={item.content} />
      ))}
    </div>
  )
}

export default CommentList
