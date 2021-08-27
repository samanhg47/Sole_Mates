import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Nav from './components/Nav'
import SearchResults from './components/SearchResults'
import Newsfeed from './components/Newsfeed'
import NewPost from './components/NewPost'
// import { post } from '../../models/shoe'
import { BASE_URL } from './globals'

function App() {
  const [posts, setPosts] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [color, setColor] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [postRequest, toggleRequest] = useState(false)

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    console.log(res.data.shoes)
    setPosts(res.data.shoes)
  }

  const createNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      brand: `${brand}`,
      model: `${model}`,
      color: `${color}`
    }
    axios.post(`${BASE_URL}/new-post`, newPost)
    toggleRequest(true)
  }

  useEffect(() => {
    getPosts()
  }, [postRequest])

  return (
    <div className="App">
      <Nav
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSearched={toggleSearched}
        setSearchResults={setSearchResults}
      />
      <NewPost
        createNewPost={createNewPost}
        setBrand={setBrand}
        setColor={setColor}
        setModel={setModel}
      />
      {searched
        ? searchResults.map((result) => (
            <SearchResults
              key={result._id}
              searchResults={searchResults}
              image={result.image}
              model={result.model}
              color={result.color}
              brand={result.brand}
            />
          ))
        : posts.map((result) => (
            <Newsfeed
              key={result._id}
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
