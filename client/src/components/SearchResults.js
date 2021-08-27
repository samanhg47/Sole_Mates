import React from 'react'

export default function SearchResults(props) {
  return (
    <div>
      <div className="post">
        <p className="post-body">
          Model: {props.model} Color: {props.color} Brand: {props.brand}
        </p>
        <div className="image-contain">
          {/* <img
            scr={`${props.image}`}
            alt={`${props.color} ${props.brand} ${props.model}`}
          /> */}
        </div>
      </div>
    </div>
  )
}
