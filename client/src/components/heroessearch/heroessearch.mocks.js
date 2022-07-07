import React, { useState } from 'react'
import HeroesSearch from './heroessearch'

const MockParentElement = () => {
  const [slug, setSlug] = useState("")

  return (
    <HeroesSearch slug={slug} setSlug={setSlug} />
  )
}

export default MockParentElement 