import React, {useEffect} from 'react'
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import {userInfo} from './redux/userReducer'
import Payment from './Payment'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log('The user is =>', authUser)
      if(authUser){
        dispatch(userInfo(authUser))
      }else{
        dispatch(userInfo(''))
      }
    })
  },[])
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path = "/login">
          <Login />

        </Route>
      <Route path = "/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path = "/payment">
        <Header />
        <Payment />
      </Route>
      <Route path = "/">
        <Header />
        <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
