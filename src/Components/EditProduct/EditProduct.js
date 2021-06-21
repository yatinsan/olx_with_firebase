import React, { useContext, useEffect, useState } from 'react'
import { Firebase } from '../config/firebase'
import {authcontext} from '../config/firebasecontext'
import Post from '../Posts/post'

function EditProduct() {
    const {user} =  useContext(authcontext)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        
        user && Firebase.firestore().collection('postes').where('user','==', user.uid).onSnapshot((res)=>{setPosts(res.docs.map(ress=>({...ress.data(), id:ress.id})))})

        
    }, [user])

    

    return (
        <div className="mt-4 p-3">
            {posts ? posts.map((res)=>(<Post res={res} key={res.id} editor ></Post>)) : <h1>no data</h1> }
        </div>
    )
}

export default EditProduct
