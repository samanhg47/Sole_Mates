import axios from 'axios'
import React, { useState } from 'react'

export default function NewPost(props) {
  const [color, setColor] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')

  const brandOnChonge = (e) => {
    setBrand(e.target.value)
  }
  const colorOnChonge = (e) => {
    setColor(e.target.value)
  }
  const modelOnChonge = (e) => {
    setModel(e.target.value)
  }

  const [newPost, setNewPost] = useState({
    brand: ``,
    model: ``,
    color: ``
  })

  const createNewPost = (e) => {
    e.preventDefault()

    setNewPost({
      brand: `${brand}`,
      model: `${model}`,
      color: `${color}`
    })
    axios.post('/new-post', newPost)
  }

  return (
    <div className="post">
      <form onSubmit={(e) => createNewPost(e)}>
        <input
          type="text"
          name="Brand"
          value={props.value}
          placeholder="Shoe Brand"
          onChange={(e) => brandOnChonge(e)}
        />
        <input
          type="text"
          name="Model"
          value={props.value}
          placeholder="Shoe Model"
          onChange={(e) => modelOnChonge(e)}
        />
        <input
          type="text"
          name="Color"
          value={props.value}
          placeholder="Shoe Color"
          onChange={(e) => colorOnChonge(e)}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  )
}
