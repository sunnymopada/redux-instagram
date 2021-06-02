import { createStore, compose } from 'redux'

import { syncHistoryWithStore } from 'react-router-redux'

import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  posts,
  comments,
}

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
