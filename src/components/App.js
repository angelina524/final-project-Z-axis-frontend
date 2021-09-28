import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// import Navbar from './Navbar'

import LoadingPage from '../pages/LoadingPage.js'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import UserPage from '../pages/UserPage/UserPage'
import UpdatePassword from '../pages/UpdatePassword'
import UpdateMe from '../pages/UpdateMe'
import WebApiTestPage from '../pages/WebApiTestPage/WebApiTestPage'
import AddPage from '../pages/AddPage'
import FormPage from '../pages/FormPage'
import BackstagePage from '../pages/BackstagePage/BackstagePage'

function App () {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route exact path="/user/me/update-password">
          <UpdatePassword />
        </Route>
        <Route exact path="/user/me">
          <UpdateMe />
        </Route>
        <Route exact path="/loading">
          <LoadingPage />
        </Route>
        <Route exact path="/test-web-api">
          <WebApiTestPage />
        </Route>
        <Route exact path="/add">
          <AddPage />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
        <Route exact path="/backstage">
          <BackstagePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
