import React from 'react'
import Search from './Search'
import axios from 'axios'

export default function Nav(props) {
  console.log(props)

  const getSearchResults = async (e) => {
    e.preventDefault()
    const search = await axios.get(`f`)
    props.setSearchQuery('')
    props.setSearchResults(search.data.results)
    props.toggleSearched(true)
  }

  const handleChange = (e) => {
    props.setSearchQuery(e.target.value)
  }

  return (
    <div>
      <a href="..." className="anchor">
        <img className="navimg" src="./images/red.jpeg" alt="logo" />
      </a>
      <Search onChange={handleChange} onSubmit={getSearchResults} />
    </div>
  )
}
