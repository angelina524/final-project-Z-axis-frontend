import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import HomePage from '../pages/HomePage'
import LoadingPage from '../pages/LoadingPage'
import WebApiTestPage from '../pages/WebApiTestPage/WebApiTestPage'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <h1>about</h1>
        </Route>
        <Route exact path="/login">
          <h1>login</h1>
        </Route>
        <Route exact path='/loading'>
          <LoadingPage />
        </Route>
        <Route exact path="/test-web-api">
          <WebApiTestPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
