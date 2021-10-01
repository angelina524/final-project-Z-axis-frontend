import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
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
import IssuePage from '../pages/IssuePage'
import { GuestTokenContext, UserTokenContext } from '../contexts/tokenContexts'
import { createGuest } from '../webapi/guestApi'

function App () {
  const [guestToken, setGuestToken] = useState(
    localStorage.getItem('guestToken') || ''
  )
  const [userToken, setUserToken] = useState(
    localStorage.getItem('userToken') || ''
  )

  useEffect(() => {
    const doAsyncEffects = async () => {
      if (!guestToken) {
        const guest = await createGuest()
        setGuestToken(guest.guestToken)
        localStorage.setItem('guestToken', guest.guestToken)
      }
    }
    doAsyncEffects()
  }, [])

  return (
    <GuestTokenContext.Provider value={guestToken}>
      <UserTokenContext.Provider value={{ userToken, setUserToken }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <HomePage />
            </Route>
            {/* todo:useContext優化 */}
            <Route exact path="/login">
              <Navbar />
              <LoginPage />
            </Route>
            {/* todo:useContext優化 */}
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
            <Route exact path="/loading">
              <LoadingPage />
            </Route>
            <Route exact path="/test-web-api">
              <Navbar />
              <WebApiTestPage />
            </Route>
            <Route exact path="/add">
              <AddPage />
            </Route>
            <Route exact path="/form">
              <FormPage />
            </Route>
            <Route exact path="/issue">
              <IssuePage />
            </Route>
          </Switch>
        </Router>
      </UserTokenContext.Provider>
    </GuestTokenContext.Provider>
  )
}

export default App
