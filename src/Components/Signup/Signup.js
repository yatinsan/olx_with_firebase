import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseconext } from '../config/firebasecontext';
import { Firebase } from '../config/firebase';
import {useHistory} from 'react-router-dom'





export default function Signup() {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [user, setuser] = useState('')
  // const Firebase = useContext(firebaseconext)

  const signupfire = (e) => {
    e.preventDefault()
    setErr('')
    Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => { setuser(res); res.user.updateProfile({userid:res.user.uid , displayName: username, });history.push({pathname:'/'}) })
    .catch((err) => {
      if(err.code==='auth/email-already-in-use'){setErr('Email alredy used')}
      else{ setErr(err.message)}      
       console.log(err)
      })
    
  
  }

  return (
    <div>
      <div className="signupParentDiv">
        <div className="logoo">
          <img width="200px" height="200px" src={Logo} alt='logologoologoo'></img>
        </div>
        <form className='wdmob'>
          <label htmlFor="fname">Username</label>
          <br />
          <input onChange={(e) => { setUsername(e.target.value) }}
            className="input" type="text" id="fname" name="name"  placeholder="user name"/>
          <br />
          <label htmlFor='email'>Email</label>
          <br />
          <input onChange={(e) => { setEmail(e.target.value) }}
            className="input" type="email" id="email" name="email" value={email} />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input onChange={(e) => { setPhone(e.target.value) }} className="input" type="number" id="phone" name="phone" value={phone} />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input onChange={(e) => { setPassword(e.target.value) }} className="input" type="password" id="lname" name="password" value={password} />
          <br />
          {err && <span className='red'>{err}</span>}
          <br />
          <button onClick={signupfire}>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
