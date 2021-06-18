import React, { useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { Firebase } from '../config/firebase'
import Post from './post'

function Posts() {

  const [postes, setPostes] = useState([])

  useEffect(() => {

    Firebase.firestore().collection('postes').get()
      .then(async(res) => { const products =await res.docs.map((sna) => { return { ...sna.data(), id: sna.id } }); setPostes(products) })
  }, [])

  const [like, setLike] = useState(false)


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {console.log(postes)}
          { postes.map(res => {


            return(<Post res={res}></Post>)
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
