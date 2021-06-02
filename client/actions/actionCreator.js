import { actionConstants } from './actionConstants'

export function increment(postIndex) {
  return {
    type: actionConstants.incrementLikes,
    index: postIndex,
  }
}

export function addComment(postId, author, comment) {
  return {
    type: actionConstants.addComment,
    postId,
    author,
    comment,
  }
}

export function removeComment(postId, commentIndex) {
  return {
    type: actionConstants.removeComment,
    index: commentIndex,
    postId,
  }
}
