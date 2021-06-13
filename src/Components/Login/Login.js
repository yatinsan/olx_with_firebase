import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import {Firebase} from '../config/firebase'

function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [err, setErr] = useState('')

const loginHandile=(e)=>{
  e.preventDefault()
  Firebase.auth().signInWithEmailAndPassword(email,password).then((res)=>{console.log('loged in')}).catch((err)=>{console.log(err);setErr(err)})
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
          <input onChange={(e)=>{setEmail(e.target.value)}} className="input" type="email" id="fname" name="email" defaultValue="John" />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e)=>{setPassword(e.target.value)}} className="input" type="password" id="lname" name="password" defaultValue="Doe" />
          <br />
          
          <br />
          <br />
          <button onClick={loginHandile} >Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
