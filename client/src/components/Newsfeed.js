import React from 'react'

export default function Newsfeed(props) {
  return (
    <div className="post">
      <h1 className="post-header">{`Post By ${props.user}`}</h1>
      <p className="post-body">
        Model: {props.model} Color: {props.color} Brand: {props.brand}{' '}
      </p>
      <div className="image-contain">
        {/* <img
          scr={`${props.image}`}
          alt={`${props.color} ${props.brand} ${props.model}`}
        /> */}
      </div>
    </div>
  )
}
