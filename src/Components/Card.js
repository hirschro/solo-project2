import React from "react";
import Fill219 from "../images/Fill219.png";






export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="image-placeholder">Image placeholder</div>
          <img  
          src={(`../images/${props.image}`)} 
          className="card-image"
          alt="card-pic"/> 
          
        <div>
          <img src={ Fill219 } alt="drop" />
          <div>{props.location}View on Google Maps</div>
          
        </div>
        {props.title},  
          {/* {props.location}
          {props.googleMapsUrl}
          {props.startDate}
          {props.endDate}
          {props.description} */}
      
        
      </div>
    </div>
  )
}

// public images are not processed by webpack
// /Users/ronaldhirschauer/src/solo-project2/src/images/Fill213.png

// for key error:  https://reactjs.org/docs/lists-and-keys.html#keys