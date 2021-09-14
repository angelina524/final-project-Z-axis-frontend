import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import HomePage from '../pages/HomePage/HomePage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/about'>
          <h1>about</h1>
        </Route>
        <Route exact path='/login'>
          <h1>login</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
