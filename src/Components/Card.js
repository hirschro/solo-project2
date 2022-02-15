/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={(`images/${props.image}`)} 
            className="location-image" 
            alt="card-image"/>
        <div className="card-body">
          <div className="card-header">
            <img src="images/Fill219.png" 
              className="drop"
              alt="drop" />
            <span className="location">{props.location}</span>
            <a href={props.googleMapsUrl} className="map-url">View on Google Maps</a>
          </div> 
          <div className="card-title">{props.title}</div> 
          <div className="dates">{props.startDate} - {props.endDate}</div>   
          <div className="card-description">{props.description}</div>
        </div>
      </div>
    </div>
  )
}

// public images are not processed by webpack
// /Users/ronaldhirschauer/src/solo-project2/src/images/Fill213.png

// for key error:  https://reactjs.org/docs/lists-and-keys.html#keys