import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import LoadingPage from '../pages/LoadingPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import UserPage from '../pages/UserPage/UserPage'
import UpdatePassword from '../pages/UpdatePassword'
import UpdateMe from '../pages/UpdateMe'
import WebApiTestPage from '../pages/WebApiTestPage/WebApiTestPage'
import AddPage from '../pages/AddPage'
import FormPage from '../pages/FormPage'
import Navbar from './Navbar'

function App () {
  return (
    <Router>
      <Switch>
        {/* need Navbar routes */}
        <Route exact path="/">
          <Navbar />
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <Navbar />
          <RegisterPage />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route exact path="/user/me/update-password">
          <Navbar />
          <UpdatePassword />
        </Route>
        <Route exact path="/user/me">
          <Navbar />
          <UpdateMe />
        </Route>

        <Route exact path="/add">
          <AddPage />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>

        {/* loading page */}
        <Route exact path="/loading">
          <LoadingPage />
        </Route>

        {/* dev test */}
        <Route exact path="/test-web-api">
          <WebApiTestPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
