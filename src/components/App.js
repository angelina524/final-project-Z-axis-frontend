import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Loader from '../components/Loader'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import UpdatePassword from '../pages/UpdatePassword'
import UpdateMe from '../pages/UpdateMe'
import AddPage from '../pages/AddPage'
import FormPage from '../pages/FormPage'
import IssuePage from '../pages/IssuePage'
import { GuestTokenContext, UserTokenContext } from '../contexts/tokenContexts'
import EditIssueContext from '../contexts/editIssueContext'
import { createGuest } from '../webapi/guestApi'
import { BackstagePage, IssueListPage } from '../pages/BackstagePages'
import BackstageSinglePage from '../pages/BackstageSinglePage'
import storage from '../localStorageApi'

function App () {
  const [guestToken, setGuestToken] = useState(storage.getGuestToken() || '')
  const [userToken, setUserToken] = useState(storage.getUserToken() || '')
  const [editIssue, setEditIssue] = useState({
    isEdit: false,
    title: '',
    description: '',
    date: {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  })

  useEffect(() => {
    const doAsyncEffects = async () => {
      if (!guestToken) {
        let guest = {}
        try {
          const response = await createGuest()
          const { data } = response
          if (!data.ok) throw new Error(data.message)
          guest = data.guest
        } catch (error) {
          console.log(error.message)
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
              <Route exact path="/issue">
                <IssuePage />
              </Route>
              <Route exact path="/backstage">
                <BackstagePage />
              </Route>
              {/* dev data  in BE seeder */}
              {/* http://localhost:3000/#/issue/0e36ddb504d5ca0cf414fe0fd16fb9bf */}
              <Route exact path="/issue/:url">
                <IssuePage />
              </Route>
              <Route exact path="/issues">
                <IssueListPage />
              </Route>
              <Route exact path="/backstage">
                <BackstagePage />
              </Route>
<<<<<<< HEAD
=======
              <Route exact path="/backstage/issue/:url">
                <BackstageSinglePage />
                {/* loading page */}
                <Route exact path="/loading">
                  <Loader />
                </Route>
                {/* dev test */}
                <Route exact path="/test-web-api">
                  <Navbar />
                  <WebApiTestPage />
                </Route>
              </Route>
>>>>>>> 8bb0d68 (add socket.io-client)
            </Switch>
          </Router>
        </EditIssueContext.Provider>
      </UserTokenContext.Provider>
    </GuestTokenContext.Provider>
  )
}

export default App
