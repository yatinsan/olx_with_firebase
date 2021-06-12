import React from 'react';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';

function App() {
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
