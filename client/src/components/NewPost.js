import React from 'react'

export default function NewPost(props) {

  const brandOnChonge = (e) => {
    props.setBrand(e.target.value)
  }
  const colorOnChonge = (e) => {
    props.setColor(e.target.value)
  }
  const modelOnChonge = (e) => {
    props.setModel(e.target.value)
  }

  return (
    <div className="post">
      <form onSubmit={(e) => props.createNewPost(e)}>
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
