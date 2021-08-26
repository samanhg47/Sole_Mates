import React from 'react'
// import './images'

export default function Nav(props) {
  return (
    <div>
      <a href="..." className="anchor">
        <img className="navimg" src="./images/red.jpeg" alt="logo" />
      </a>

      <input OnChange={props.OnChange} id="search-input" />
      <button OnClick={props.onClick} id="search-button">
        Search
      </button>

      <a href="..." className="anchor">
        <img className="navimg" src="./images/profile.png" alt="profile" />
      </a>
    </div>
  )
}
