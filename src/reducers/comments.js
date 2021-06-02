import { actionConstants } from '../actions/actionConstants'

function postComments(state = [], action) {
  switch (action.type) {
    case actionConstants.addComment:
      const { author, comment } = action
      return [
        ...state,
        {
          user: author,
          text: comment,
        },
      ]
    case actionConstants.removeComment:
      const { index: commentIndex } = action
      return [...state.slice(0, commentIndex), ...state.slice(commentIndex + 1)]
    default:
      return state
  }
  return state
}

function comments(state = [], action) {
  const { postId } = action
  if (typeof postId !== 'undefined') {
    return {
      ...state,
      [postId]: postComments(state[postId], action),
    }
  }
  return state
}

export default comments
