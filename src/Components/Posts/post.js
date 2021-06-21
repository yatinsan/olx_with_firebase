import React, { useContext, useEffect, useState } from 'react'
import {Firebase} from '../config/firebase'
import firebase from 'firebase' 
import {authcontext} from '../config/firebasecontext'
import {useHistory} from 'react-router-dom'
import {postConstruct} from '../config/viewpostcontext'

function Post({res, editor}) {
  const {user} = useContext(authcontext)
    const fvdb = user ? Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite') : null
    const {setPostView} = useContext(postConstruct)
    const [likes, setLikes] = useState([])
    const history = useHistory()
    const [like, setLike] = useState(false)
    useEffect(() => {
        // user && Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite').get().then((snapshot) => {setLikes(snapshot.docs.map(doc =>({...doc.data()})))})
        // slower way
        // fvdb.where('fav','==',res.id).get().then(res => {setLike(res.docs.map(snap=>{snap.data()}).length)})
        // simple way
       user && fvdb.doc(res.id).onSnapshot((snapshot) => {setLike(snapshot.exists)})     
        
        // console.log(Firebase.database().ref('olxusers').orderByKey().isEqual())
    }, [])

    

    const likeHandler =()=>{

        console.log(likes)
        console.log(res.id)
        
        !like && Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite').doc(res.id).set({user:user.uid,fav:res.id,date:firebase.firestore.FieldValue.serverTimestamp()})
        // !like && Firebase.firestore().collection('olxusers').doc(user.uid).update({favorite:[res.id]})
        !like && setLike(true); 
        like && Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite').doc(res.id).delete()
        like && setLike(false); 
    }

    const deleteitem = (e)=>{
      Firebase.firestore().collection('postes').doc(res.id).delete().catch((err)=>{console.log(err)}).then(()=>{console.log('delete')})
      console.log(res.id)
    }
    return (
        <div className="card "     key={res.id}      >
            <div className="favorite">
              {/* <Heart></Heart> */}
              <i onClick={likeHandler} className={like?'bi bi-heart-fill heart hrred':'bi bi-heart heart'}></i>
            </div>
            <div onClick={()=>{setPostView(res);history.push({ pathname: '/ProductView' })}} className="image">
              <img src={res.imageurl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {res.price}</p>
              <span className="kilometer">{res.name}</span>
              <p className="name"> {res.category}</p>
            </div>
            {editor &&<div className="btfun">
            <button type="button" class="btn btn-primary">Edit <i class="bi bi-pencil-square"></i></button>
            <button onClick={deleteitem} type="button" class="btn btn-danger">Delete <i className="bi bi-trash-fill"></i></button>
            </div>}
            <div className="date">
              <span>{res.createdAt}</span>
            </div>
          </div>
    )
}

export default Post
