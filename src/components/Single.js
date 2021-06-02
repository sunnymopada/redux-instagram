import React from 'react'

import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
  render() {
    const { params, comments, posts, increment } = this.props
    const { postId } = params

    const postIndex = posts.findIndex((post) => post.code === postId)
    const post = posts[postIndex]

    const postComments = comments[postId] || []

    return (
      <div className='single-photo'>
        <Photo
          postIndex={postIndex}
          post={post}
          onIncrementLikes={increment}
          comments={comments}
        />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single
