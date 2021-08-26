import React from 'react'

export default function Nav(props) {
  return (
    <nav>
      <a className="anchor">
        <img src="../../../images/red.jpeg" alt="logo" />
      </a>
      <input OnChange={props.OnChange} id="search-input" />
      <button OnClick={props.onClick} id="search-button">
        Search
      </button>
      <img src="../../../images/profile.png" alt="profile" />
      <a class="anchor"></a>
    </nav>
  )
}
