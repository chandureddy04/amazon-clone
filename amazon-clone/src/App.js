import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import { auth } from './firebase'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider';

const promise = loadStripe(
  'pk_test_51JSmoCSAV6IwmYLcHd43HhCbQEynbrrNO5D7eHK6zeu2AOI0LEfiLuF89whxM3S1WwfpZOw9HvMZgYu1Nh8Y7j1a00AM3KNHpy'
)

function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS ', authUser)

      if (authUser) {
        // the user logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user logged out

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
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
