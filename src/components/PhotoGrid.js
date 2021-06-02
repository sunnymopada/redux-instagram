import React, { Component } from 'react'
import Photo from './Photo'

class PhotoGrid extends Component {
  render() {
    const { posts, comments, increment } = this.props
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, index) => (
          <Photo
            key={index}
            postIndex={index}
            post={post}
            onIncrementLikes={increment}
            comments={comments}
          />
        ))}
      </div>
    )
  }
}

export default PhotoGrid
