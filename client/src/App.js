import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Nav from './components/Nav'
import SearchResults from './components/SearchResults'
import Newsfeed from './components/Newsfeed'
import NewPost from './components/NewPost'

function App() {
  const [posts, setPosts] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const getPosts = async () => {
    const res = await axios.get(`http://localhost:3001/`)
    console.log(res.data)
    setPosts(res.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="App">
      <Nav
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSearched={toggleSearched}
        setSearchResults={setSearchResults}
      />
      <NewPost />
      {searched
        ? searchResults.map((result) => (
            <SearchResults
              key={result.id}
              searchResults={searchResults}
              image={result.image}
              model={result.model}
              color={result.color}
              brand={result.brand}
              user={result.user_id}
            />
          ))
        : posts.map((result) => (
            <Newsfeed
              key={result.id}
              image={result.image}
              model={result.model}
              color={result.color}
              brand={result.brand}
              user={result.user_id}
            />
          ))}
    </div>
  )
}

export default App
