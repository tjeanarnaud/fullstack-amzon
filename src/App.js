import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
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