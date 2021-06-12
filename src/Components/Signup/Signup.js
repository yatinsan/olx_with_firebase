import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseconext } from '../config/firebasecontext';
import { Firebase } from '../config/firebase';


export default function Signup() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  // const Firebase = useContext(firebaseconext)

  const signupfire= (e)=>{
    e.preventDefault()
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((res)=>{res.user.updateProfile({displayName:username,})}).catch((err)=>{setErr(err.message)})

    
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
          <input
            onChange={(e)=>{setUsername(e.target.value)}}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
         onChange={(e)=>{setEmail(e.target.value)}}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
          onChange={(e)=>{setPhone(e.target.value)}}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          onChange={(e)=>{setPassword(e.target.value)}}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          {err && <span className='red'>{err}</span>}
          <button  onClick={signupfire}>Signup</button>
        </form>
        <a href='.././'>Login</a>
      </div>
    </div>
  );
}
