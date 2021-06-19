import React, { useContext, useEffect, useState } from 'react'
import {Firebase} from '../config/firebase'
import firebase from 'firebase' 
import {authcontext} from '../config/firebasecontext'
import {useHistory} from 'react-router-dom'
import {postConstruct} from '../config/viewpostcontext'

function Post({res}) {

    const {setPostView} = useContext(postConstruct)
    const [likes, setLikes] = useState([])
    const history = useHistory()
    useEffect(() => {
        user && Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite').get().then((snapshot) => {setLikes(snapshot.docs.map(doc =>({...doc.data()})))})
        Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite').where('fav','==',res.id).get().then(res => {setLike(res.docs.map(snap=>{snap.data()}).length)})
        
        // console.log(Firebase.database().ref('olxusers').orderByKey().isEqual())
    }, [])

    const [like, setLike] = useState(false)
   
    const {user} = useContext(authcontext)

    const likeHandler =()=>{

        console.log(likes)
        console.log(res.id)
        
        !like && Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite').doc(res.id).set({user:user.uid,fav:res.id,date:firebase.firestore.FieldValue.serverTimestamp()})
        // !like && Firebase.firestore().collection('olxusers').doc(user.uid).update({favorite:[res.id]})
        !like && setLike(true); 
        like && Firebase.firestore().collection('olxusers').doc(user.uid).collection('favorite').doc(res.id).delete()
        like && setLike(false); 
    }
    return (
        <div className="card"    key={res.id}      >
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
            <div className="date">
              <span>{res.createdAt}</span>
            </div>
          </div>
    )
}

export default Post
