import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store, { history } from './store'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// Import css
import './styles/animations.css'
import './styles/normalize.css'
import './styles/typography.css'
import './styles/style.css'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
