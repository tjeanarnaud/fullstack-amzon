import React, { useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase'
import { useStateValue } from './StateProvider'


function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(() => {
    // Will only run once when the app components loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)

      if (authUser) {
        // The user just looged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="app">

        <Switch>

          <Router path="/login">
            <Login />
          </Router>

          <Router path="/checkout">
            <Header />
            <Checkout />
          </Router>

          <Router path="/">
            <Header />
            <Home />
          </Router>

        </Switch>
      </div>
    </Router>
  )
}

export default App