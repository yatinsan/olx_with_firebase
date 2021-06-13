import React, { useContext, useEffect } from 'react';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import {authcontext, firebaseconext} from './Components/config/firebasecontext'
import {Firebase} from './Components/config/firebase'





function App() {

  // const firebase=firebaseconext

const {setuser}= useContext(authcontext)


useEffect(() => {
  Firebase.auth().onAuthStateChanged((user)=>{setuser(user); console.log(user.displayName)})
  
  
}, [])

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/'>
      <div>
        <Home />
      </div>
      </Route>
      <Route path="/signup">
        <SignupPage/>
      </Route>
      <Route path="/login">
        <LoginPage/>
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
