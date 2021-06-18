import React, { useState } from 'react'

function Post({res}) {

    const [like, setLike] = useState(false)
    return (
        <div className="card"          >
            <div className="favorite">
              {/* <Heart></Heart> */}
              <i onClick={()=>{setLike(!like)}} class={like?'bi bi-heart-fill heart hrred':'bi bi-heart heart'}></i>
            </div>
            <div className="image">
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
