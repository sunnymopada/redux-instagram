import { actionConstants } from '../actions/actionConstants'

function posts(state = [], action) {
  switch (action.type) {
    case actionConstants.incrementLikes:
      const { index: postIndex } = action
      return [
        ...state.slice(0, postIndex),
        { ...state[postIndex], likes: state[postIndex].likes + 1 },
        ...state.slice(postIndex + 1),
      ]
    default:
      return state
  }
}

export default posts
