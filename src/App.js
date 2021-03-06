import React, { useContext, useEffect } from 'react';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import { authcontext, firebaseconext } from './Components/config/firebasecontext'
import { Firebase } from './Components/config/firebase'
import Create from './Components/Create/Create';
import Post from './Components/config/viewpostcontext'
import ProductView from './Pages/ViewPost'
import Edits from './Pages/Edits'





function App() {

  // const firebase=firebaseconext

  const { setuser } = useContext(authcontext)


  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => { setuser(user) })


  }, [])

  return (
    <Post>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div>
            <Home />
          </div>
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/addProduct">
          <Create />
        </Route>
        <Route path="/ProductView">
          <ProductView/>
        </Route>
        <Route path="/editProduct">
          <Edits />
        </Route>
      </Switch>
    </BrowserRouter>
    </Post>
  );
}

export default App;
