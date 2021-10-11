import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import ScrollToTop from './ScrollToTop'
import Loader from './Loader'
import storage from '../localStorageApi'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import UserPage from '../pages/UserPage'
import UpdatePassword from '../pages/UpdatePassword'
import UpdateMe from '../pages/UpdateMe'
import AddPage from '../pages/AddPage'
import FormPage from '../pages/FormPage'
import IssuePage from '../pages/IssuePage'
import { BackstagePage, IssueListPage } from '../pages/BackstagePages'
import BackstageSinglePage from '../pages/BackstageSinglePage'
import { GuestTokenContext, UserTokenContext } from '../contexts/tokenContexts'
import EditIssueContext from '../contexts/editIssueContext'
import LoadingContext from '../contexts/loadingContext'
import { createGuest } from '../webapi/guestApi'
import defaultEditIssue from '../constants/defaultEditIssue'

function App () {
  const [guestToken, setGuestToken] = useState(storage.getGuestToken() || '')
  const [userToken, setUserToken] = useState(storage.getUserToken() || '')
  const [isLoading, setIsLoading] = useState(false)
  const [editIssue, setEditIssue] = useState(defaultEditIssue)

  useEffect(() => {
    const doAsyncEffects = async () => {
      if (!guestToken) {
        let guest = {}
        try {
          setIsLoading(true)
          const response = await createGuest()
          const { data } = response
          if (!data.ok) throw new Error(data.message)
          guest = data.guest
          setIsLoading(false)
        } catch (error) {
          console.log(error.message)
          setIsLoading(false)
          return
        }
        setGuestToken(guest.guestToken)
        storage.setGuestToken(guest.guestToken)
      }
    }
    doAsyncEffects()
  }, [])

  return (
    <GuestTokenContext.Provider value={guestToken}>
      <UserTokenContext.Provider value={{ userToken, setUserToken }}>
        <EditIssueContext.Provider value={{ editIssue, setEditIssue }}>
          <LoadingContext.Provider value={setIsLoading}>
            {isLoading && <Loader />}
            <Router>
              <ScrollToTop />
              <Switch>
                <Route exact path="/">
                  <Navbar />
                  <HomePage />
                </Route>
                {/* todo:useContext優化 */}
                {!userToken && (
                  <Route exact path="/login">
                    <Navbar />
                    <LoginPage />
                  </Route>
                )}
                {/* todo:useContext優化 */}
                {!userToken && (
                  <Route exact path="/register">
                    <Navbar />
                    <RegisterPage />
                  </Route>
                )}
                {userToken && (
                  <Route exact path="/user/me">
                    <Navbar />
                    <UserPage />
                  </Route>
                )}
                {userToken && (
                  <Route exact path="/user/me/update-password">
                    <Navbar />
                    <UpdatePassword />
                  </Route>
                )}
                {userToken && (
                  <Route exact path="/user/me/update">
                    <Navbar />
                    <UpdateMe />
                  </Route>
                )}
                {userToken && (
                  <Route exact path="/add">
                    <AddPage />
                  </Route>
                )}
                {userToken && (
                  <Route exact path="/form">
                    <FormPage />
                  </Route>
                )}
                {/* dev data  in BE seeder */}
                {/* http://localhost:3000/#/issues/0e36ddb504d5ca0cf414fe0fd16fb9bf */}
                <Route exact path="/issues/:url">
                  <IssuePage />
                </Route>
                <Route exact path="/issues">
                  <IssueListPage />
                </Route>
                {userToken && (
                  <Route exact path="/backstage">
                    <BackstagePage />
                  </Route>
                )}
                {userToken && (
                  <Route exact path="/backstage/issues/:url">
                    <BackstageSinglePage />
                  </Route>
                )}
                <Redirect to="/" />
              </Switch>
            </Router>
          </LoadingContext.Provider>
        </EditIssueContext.Provider>
      </UserTokenContext.Provider>
    </GuestTokenContext.Provider>
  )
}

export default App
