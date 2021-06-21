import React, { useContext } from 'react';
import {postConstruct} from '../config/viewpostcontext'

import './View.css';
function View() {
 const {postView} = useContext(postConstruct)
  return (
    <div className="viewParentDiv">
      <div  className="imageShowDiv">
          <img className="img_vi"
          src={postView.imageurl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postView.price} </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
