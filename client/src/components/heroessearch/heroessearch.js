import React from 'react'
import './heroessearch.css'

export default (props) => {
  const {slug, setSlug} = props

  return (
    <input
    type="text"
    name="search"
    value={slug}
    onChange={(event) => setSlug(event.target.value)}
  />
  )
}