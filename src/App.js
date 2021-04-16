import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>

          <Router path="/checkout">
            <Checkout />
          </Router>

          <Router path="/">
            <Home />
          </Router>

        </Switch>
      </div>
    </Router>
  )
}

export default App