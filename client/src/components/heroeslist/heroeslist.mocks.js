import HeroesList from './heroeslist'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const MockParentElement = () => {
  const mockHeroes = [
    {
      id: 1,
      name: 'Captain America',
      realname: 'Steve Rogers',
      firstappearance: 'Captain America Comics #1',
      slug: 'captain-america',
      snapped: false,
    },
    {
      id: 2,
      name: 'Spider-Man',
      realname: 'Peter Parker',
      firstappearance: 'Amazing Fantasy #15',
      slug: 'spider-man',
      snapped: true,
    },
  ]

  return (
    <BrowserRouter>
      <HeroesList heroes={mockHeroes} />
    </BrowserRouter>
  )
}

export default MockParentElement
