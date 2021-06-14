import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { Firebase, provider } from '../config/firebase'
import { useHistory } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const history = useHistory()

  const loginHandile = (e) => {
    e.preventDefault()
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => { console.log('loged in'); history.push({ pathname: '/' }) })
      .catch((errs) => {
        console.log(errs);
        if (errs.code == "auth/invalid-email") { setErr('invalid email id') }
        else if (errs.code === "auth/user-not-found") { setErr('user not found') }
        else if (errs.code === 'auth/wrong-password') { setErr('incorect password') }
        else { setErr(errs.message) }
      })
  }

 const GoogleSignin = (e) => {
    e.preventDefault()
    Firebase.auth().signInWithPopup(provider)
        .then((data) => { console.log(data);history.push({ pathname: '/' }) })
        .catch((err) => { console.log(err) })
}



  return (
    <div>
      <div className="loginParentDiv">
        <div className="logoo">
          <img width="200px" height="200px" src={Logo} alt=''></img>
        </div>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e) => { setEmail(e.target.value) }} className="input" type="email" id="fname" name="email" />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e) => { setPassword(e.target.value) }} className="input" type="password" id="lname" name="password" />
          <br />
          <span className='red'>{err ? err : null}</span>
          <br />
          <br />
          <button onClick={loginHandile} >Login</button>
          <br />
          <button onClick={GoogleSignin}>Login with google</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
