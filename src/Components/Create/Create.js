import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {Firebase} from '../config/firebase';
import {authcontext} from '../config/firebasecontext'
import {useHistory} from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState(null)
  const [category, setCategory] = useState(null)
  const [price, setPrice] = useState(null)
  const [image, setImage] = useState(null)
  const {user} = useContext(authcontext) 
  const date=new Date
  const history = useHistory()

  const upload = (e)=>{
    e.preventDefault()
    Firebase.storage().ref(`/images/${user.uid}/${image.name}`).put(image)
    .then( (res)=>{res.ref.getDownloadURL().then((imageurl)=>{Firebase.firestore().collection('postes').add({name,category,price,imageurl,user:user.uid,createdAt:date.toDateString()})
    .then(history.push({pathname:'/'}))})})
    .catch((err)=>{console.log(err)})

  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input onChange={(e)=>{setName(e.target.value)}} className="input" type="text" id="fname" name="Name" defaultValue="John" />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input onChange={(e)=>{setCategory(e.target.value)}} className="input" type="text" id="fname" name="category" defaultValue="John" />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e)=>{setPrice(e.target.value)}} className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):null}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
            <br />
            <button onClick={upload} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
