import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component {
  render() {
    const { post, postIndex, comments, onIncrementLikes } = this.props
    const { code, display_src, caption, likes } = post
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${code}`}>
            <img src={display_src} alt={caption} className='grid-photo' />
          </Link>

          <CSSTransitionGroup
            transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={likes} className='likes-heart'>
              {likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{caption}</p>
          <div className='control-buttons'>
            <button
              onClick={onIncrementLikes.bind(null, postIndex)}
              className='likes'
            >
              &hearts; {likes}
            </button>
            <Link className='button' to={`/view/${code}`}>
              <span className='comment-count'>
                <span className='speech-bubble'></span>
                {comments[code] ? comments[code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}

export default Photo
