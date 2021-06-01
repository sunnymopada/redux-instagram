import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store, { history } from './store'

// Import Components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// Import css
import css from './styles/style.styl'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
